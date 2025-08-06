import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { log } from "./utils";
import { insertContactSubmissionSchema } from "./schema";
import { z } from "zod";
import { storage } from "./storage";

const app = express();

// Body parsing middleware - must come before CORS
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS middleware for development - specific origin for credentials
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Specific origin for credentials
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// API health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📨 Contact form submission received:', req.body);
  
  try {
    // Validate the request body using the schema
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    console.log('✅ Data validated successfully:', validatedData);
    
    // Save to database using storage layer
    const submission = await storage.createContactSubmission(validatedData);
    console.log('✅ Contact submission saved to database:', submission);
    
    res.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
      submissionId: submission._id
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data", 
        errors: error.errors 
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    }
  }
});

// Get all contact submissions
app.get('/api/contact', async (req, res) => {
  try {
    const submissions = await storage.getContactSubmissions();
    res.json(submissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error fetching submissions" 
    });
  }
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
  throw err;
});

// ALWAYS serve the API on the port specified in the environment variable PORT
// Default to 5000 if not specified.
const port = parseInt(process.env.PORT || '5000', 10);
app.listen(port, "0.0.0.0", () => {
  log(`API server running on port ${port}`);
  log(`Health check available at http://localhost:${port}/api/health`);
});
