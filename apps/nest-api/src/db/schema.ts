import { nanoid } from 'nanoid';
import { pgTable, varchar } from 'drizzle-orm/pg-core';

export const coffees = pgTable('coffees', {
  id: varchar('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: varchar('name', { length: 256 }),
  brandName: varchar('brand_name', { length: 256 }),
});

export const coffeeFlavors = pgTable('coffee_flavors', {
  id: varchar('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  coffeeId: varchar('coffeeId').references(() => coffees.id),
  flavorId: varchar('flavorId').references(() => flavors.id),
});
export const flavors = pgTable('flavors', {
  id: varchar('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: varchar('name', { length: 256 }),
  description: varchar('description', { length: 256 }),
});
