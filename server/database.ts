import { MongoClient } from 'mongodb';

// MongoDB connection with better error handling
// Try to use MongoDB Atlas or local MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/getech';

let client: MongoClient | null = null;
let db: any = null;

export async function connectToDatabase() {
  try {
    console.log('🔌 Attempting to connect to MongoDB at:', MONGODB_URI);
    client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      connectTimeoutMS: 10000, // 10 second timeout
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