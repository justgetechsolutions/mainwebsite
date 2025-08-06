import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { DatabaseStorage } from "./dbStorage";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

// In-memory storage fallback
class InMemoryStorage implements IStorage {
  private users: User[] = [];
  private contactSubmissions: ContactSubmission[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user._id.toString() === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      ...user,
      _id: { toString: () => `user-${Date.now()}` } as any
    };
    this.users.push(newUser);
    return newUser;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const newSubmission: ContactSubmission = {
      ...submission,
      _id: { toString: () => `submission-${Date.now()}` } as any,
      createdAt: new Date()
    };
    this.contactSubmissions.push(newSubmission);
    console.log('💾 Contact submission saved to in-memory storage:', newSubmission);
    return newSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contactSubmissions].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

// Try to use database storage, fallback to in-memory storage
let storage: IStorage;

try {
  storage = new DatabaseStorage();
  console.log('✅ Using MongoDB storage');
} catch (error) {
  console.log('⚠️ MongoDB not available, using in-memory storage');
  storage = new InMemoryStorage();
}

export { storage };
