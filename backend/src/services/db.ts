import { checkDatabaseConnection as checkMongo, getInquiriesCollection, connectToDatabase } from './mongo';

export async function checkDatabaseConnection(): Promise<boolean> {
  return await checkMongo();
}

export { getInquiriesCollection, connectToDatabase };
