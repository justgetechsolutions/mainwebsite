import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "./schema";
import { db } from "./database";
import { ObjectId } from "mongodb";

export class DatabaseStorage {
  async getUser(id: string): Promise<User | undefined> {
    try {
      const result = await db.collection("users").findOne({ _id: new ObjectId(id) });
      return result as User | undefined;
    } catch (error) {
      console.error("Error getting user:", error);
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await db.collection("users").findOne({ username });
      return result as User | undefined;
    } catch (error) {
      console.error("Error getting user by username:", error);
      throw error;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = await db.collection("users").insertOne(insertUser);
      return { ...insertUser, _id: result.insertedId } as User;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    try {
      console.log("🗄️ Attempting to save contact submission to MongoDB:", submission);
      
      const submissionWithDate = {
        ...submission,
        createdAt: new Date()
      };
      
      console.log("📝 Submission with date:", submissionWithDate);
      
      const result = await db.collection("contact_submissions").insertOne(submissionWithDate);
      console.log("✅ MongoDB insert result:", result);
      
      const savedSubmission = { ...submissionWithDate, _id: result.insertedId } as ContactSubmission;
      console.log("💾 Saved submission:", savedSubmission);
      
      return savedSubmission;
    } catch (error) {
      console.error("❌ Error creating contact submission:", error);
      throw error;
    }
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      const result = await db.collection("contact_submissions")
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
      return result as ContactSubmission[];
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      throw error;
    }
  }
} 