import "dotenv/config"; // Load environment variables
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/schema.ts", // Path to your schema file(s)
    out: "./drizzle", // Output directory for migrations
    dialect: "postgresql", // Specify PostgreSQL dialect
    dbCredentials: {
        url: process.env.DATABASE_URL!, // Ensure DATABASE_URL is set in your .env
    },
    verbose: true, // Optional: more detailed logs
    strict: true, // Optional: stricter checks
});
