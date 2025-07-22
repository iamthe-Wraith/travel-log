import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const locations = sqliteTable('locations', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
});
