import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

// Load environment variables from .env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const envSchema = z.object({
  PORT: z.string().default('5050').transform((val) => parseInt(val, 10)),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FRONTEND_URL: z.string().default('http://localhost:3000'),
  DATABASE_URL: z.string().default('mongodb+srv://wecovein_db_user:startup1@cluster0.noawy4c.mongodb.net/wecove_db'),
  MONGODB_URI: z.string().default('mongodb+srv://wecovein_db_user:startup1@cluster0.noawy4c.mongodb.net/'),
  CONTACT_EMAIL: z.string().email().default('wecove.in@gmail.com'),
  EMAIL_FROM: z.string().default('sharmachetan7816@gmail.com'),
  EMAIL_HOST: z.string().default('smtp.gmail.com'),
  EMAIL_PORT: z.string().optional().transform((val) => (val ? parseInt(val, 10) : 465)),
  EMAIL_USER: z.string().optional(),
  EMAIL_PASS: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  JWT_SECRET: z.string().default('wecove_super_secret_jwt_key_default'),
  ADMIN_INITIAL_USERNAME: z.string().default('admin'),
  ADMIN_INITIAL_PASSWORD: z.string().default('WeCoveAdmin2026!'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;
