import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { user } from './auth';

export const location = sqliteTable('location', {
    id: integer().primaryKey(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    description: text(),
    lat: real().notNull(),
    lng: real().notNull(),
    userId: integer().notNull().references(() => user.id),
    createdAt: integer().notNull().$default(() => Date.now()),
    updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
