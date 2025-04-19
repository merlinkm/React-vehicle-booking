import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const carListingTable = pgTable("car_list", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  listingTitle: varchar({ length: 255 }).notNull(),
  tagline:varchar('tagline'),
  originalPrice:varchar('originalPrice').notNull(),
  sellingPrice:varchar('sellingPrice').notNull(),
  category:varchar('category'),
  condition:varchar('condition'),
  type:varchar('type'),
  make:varchar('make'),
  year:varchar('year'),
  description:varchar('description'),
  features:json('features'),

//   age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
});