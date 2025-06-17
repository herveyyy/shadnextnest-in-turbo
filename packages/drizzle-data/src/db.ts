import { drizzle } from "drizzle-orm/node-postgres"; // Use node-postgres driver
import { Pool } from "pg"; // Import Pool from 'pg'
import * as schema from "./schema";
import "dotenv/config"; // Ensure environment variables are loaded

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // You can add more pg Pool options here, e.g., ssl: { rejectUnauthorized: false } for some cloud providers
    // max: 10, // maximum number of clients in the pool
    // idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
});

export const db = drizzle(pool, { schema });
export type DB = typeof db;

// Optional: Graceful shutdown for the pool
process.on("beforeExit", async () => {
    await pool.end();
    console.log("PostgreSQL pool closed.");
});
export const coffees = schema.coffees;
export const flavors = schema.flavors;
export const coffeeFlavors = schema.coffeeFlavors;
