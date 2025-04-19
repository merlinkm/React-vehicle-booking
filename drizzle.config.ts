import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const DB_URL = process.env.VITE_DRIZZLE_DATABASE_URL!; 

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_URL,
  },
});
