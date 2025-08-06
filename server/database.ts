import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// MongoDB connection with better error handling
// Try to use MongoDB Atlas or local MongoDB
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/getech';

// Add required parameters for MongoDB Atlas
if (MONGODB_URI.includes('mongodb+srv://') && !MONGODB_URI.includes('?')) {
  MONGODB_URI += '?retryWrites=true&w=majority';
}

let client: MongoClient | null = null;
let db: any = null;

export async function connectToDatabase() {
  try {
    console.log('🔌 Attempting to connect to MongoDB at:', MONGODB_URI);
    
    // Check if we have a valid MongoDB URI
    if (!MONGODB_URI || MONGODB_URI === 'mongodb://127.0.0.1:27017/getech') {
      console.log('⚠️  No MongoDB URI provided, using mock database');
      throw new Error('No MongoDB URI configured');
    }
    
    client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, // 10 second timeout
      connectTimeoutMS: 15000, // 15 second timeout
      socketTimeoutMS: 45000, // 45 second timeout
      maxPoolSize: 10,
      retryWrites: true,
      w: 'majority'
    });
    await client.connect();
    db = client.db('getech');
    
    // Test the connection
    await db.admin().ping();
    console.log('✅ MongoDB connected successfully');
    
    return { client, db };
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    console.log('💡 Please make sure MongoDB is running locally or set MONGODB_URI environment variable');
    console.log('💡 For local development, you can install MongoDB or use MongoDB Atlas');
    
    // For development, we'll create a mock database
    console.log('🔄 Creating in-memory mock database for development...');
    const mockDb = {
      collection: (name: string) => ({
        findOne: async () => null,
        insertOne: async (doc: any) => ({ insertedId: 'mock-id-' + Date.now() }),
        find: () => ({
          sort: () => ({
            toArray: async () => []
          })
        })
      })
    };
    
    return { client: null, db: mockDb };
  }
}

// Initialize connection
let mongoClient: MongoClient | null = null;
let database: any = null;

async function initializeDatabase() {
  const result = await connectToDatabase();
  mongoClient = result.client;
  database = result.db;
}

// Initialize immediately
initializeDatabase().catch(console.error);

export { database as db, mongoClient };

// Graceful shutdown only on SIGINT (Ctrl+C)
process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection...');
  if (mongoClient) {
    await mongoClient.close();
  }
  process.exit(0);
}); 