import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const location = sqliteTable('location', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    lat: real('lat').notNull(),
    lng: real('lng').notNull(),
    createdAt: integer('created_at').notNull().$default(() => Date.now()),
    updatedAt: integer('updated_at').notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
