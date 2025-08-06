import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "./schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    console.log("📨 Contact form submission received:", {
      method: req.method,
      headers: req.headers,
      body: req.body,
      contentType: req.get('Content-Type')
    });

    try {
      // Validate the request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      console.log("✅ Data validated successfully:", validatedData);
      
      // Create the submission in the database
      const submission = await storage.createContactSubmission(validatedData);
      console.log("✅ Contact submission saved to database:", submission);
      
      // In a real application, you would send an email here using Nodemailer
      // For now, we'll just log the submission
      console.log("📧 Contact form submission processed successfully:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        submissionId: submission._id
      });
    } catch (error) {
      console.error("❌ Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        console.error("Validation errors:", error.errors);
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again.",
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
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

  const httpServer = createServer(app);
  return httpServer;
}
