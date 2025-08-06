import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './schema.ts',
  out: './drizzle',
  dialect: 'mongodb' as any,
  dbCredentials: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/getech',
  },
}); 