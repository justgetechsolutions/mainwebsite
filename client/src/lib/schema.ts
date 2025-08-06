import { z } from "zod";
import { ObjectId } from "mongodb";

// Zod schemas for validation
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const insertContactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1), // Added phone field
  company: z.string().optional(),
  message: z.string().min(1),
});

// TypeScript types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = InsertUser & {
  _id: ObjectId;
};

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = InsertContactSubmission & {
  _id: ObjectId;
  createdAt: Date;
}; 