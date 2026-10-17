import { MongoClient, Db } from 'mongodb';
import dns from 'node:dns';
import { env } from '../config/env';

// Ensure reliable SRV DNS resolution and IPv4 priority for MongoDB Atlas cluster
try {
  dns.setDefaultResultOrder('ipv4first');
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {
  // Fall back to default resolver if custom servers cannot be set
}

let client: MongoClient | null = null;
let db: Db | null = null;
let isConnected = false;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (client && db && isConnected) {
    return { client, db };
  }

  const uri = env.MONGODB_URI || 'mongodb+srv://wecovein_db_user:startup1@cluster0.noawy4c.mongodb.net/';
  
  try {
    client = new MongoClient(uri, {
      connectTimeoutMS: 8000,
      serverSelectionTimeoutMS: 8000,
      family: 4,
    });

    await client.connect();
    db = client.db('wecove_db');
    isConnected = true;
    console.log('[MongoDB] Connected successfully to Atlas cluster: wecove_db');
    return { client, db };
  } catch (error) {
    console.error('[MongoDB] Connection error:', (error as Error).message);
    throw error;
  }
}

export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    const { db } = await connectToDatabase();
    await db.command({ ping: 1 });
    return true;
  } catch (err) {
    console.warn('[MongoDB] Ping check warning:', (err as Error).message);
    return false;
  }
}

export async function getInquiriesCollection() {
  const { db } = await connectToDatabase();
  return db.collection('inquiries');
}
