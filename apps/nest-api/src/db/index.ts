import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL as string);
export type DB = typeof db;

export default db;
