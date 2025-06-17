import {
    pgTable,
    serial,
    text,
    timestamp,
    boolean,
    uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(), // UUID primary key
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date()), // Auto update
});

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content"),
    userId: uuid("user_id")
        .notNull()
        .references(() => users.id), // Foreign key to users
    createdAt: timestamp("created_at").defaultNow(),
});

// Define relations (optional but highly recommended for Drizzle)
export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.userId],
        references: [users.id],
    }),
}));
