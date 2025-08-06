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

// For Render compatibility, convert mongodb+srv to mongodb to avoid SSL issues
if (process.env.NODE_ENV === 'production' && MONGODB_URI.includes('mongodb+srv://')) {
  console.log('🌐 Production environment: Converting to standard MongoDB format to avoid SSL issues');
  MONGODB_URI = MONGODB_URI.replace('mongodb+srv://', 'mongodb://');
  // Add SSL parameters for standard MongoDB
  if (!MONGODB_URI.includes('?')) {
    MONGODB_URI += '?ssl=true&authSource=admin';
  } else {
    MONGODB_URI += '&ssl=true&authSource=admin';
  }
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
    
    // Try different connection approaches for Render compatibility
    const connectionOptions = {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 1,
      minPoolSize: 0,
      maxIdleTimeMS: 30000
    };
    
    // For Render, try with minimal SSL settings
    if (process.env.NODE_ENV === 'production') {
      console.log('🌐 Production environment detected, using Render-compatible settings');
    }
    
    client = new MongoClient(MONGODB_URI, connectionOptions);
    await client.connect();
    db = client.db('getech');
    
    // Test the connection
    await db.admin().ping();
    console.log('✅ MongoDB connected successfully');
    
    return { client, db };
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    
    // Check if it's an SSL error
    if (error && typeof error === 'object' && 'message' in error && 
        typeof error.message === 'string' && 
        (error.message.includes('SSL') || error.message.includes('TLS'))) {
      console.log('🔒 SSL/TLS error detected. This is common on Render with MongoDB Atlas.');
      console.log('💡 The server will use mock database for now.');
      console.log('💡 To fix this, try:');
      console.log('   1. Use MongoDB Atlas with a different connection method');
      console.log('   2. Use a different database service');
      console.log('   3. Contact Render support for SSL configuration');
    } else {
      console.log('💡 Please make sure MongoDB is running locally or set MONGODB_URI environment variable');
      console.log('💡 For local development, you can install MongoDB or use MongoDB Atlas');
    }
    
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