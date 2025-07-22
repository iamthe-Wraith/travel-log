import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { user } from './auth';
import { location } from './location';

export const locationLog = sqliteTable('location_log', {
    id: integer().primaryKey(),
    name: text().notNull(),
    description: text(),
    startedAt: integer().notNull(),
    endedAt: integer().notNull(),
    lat: real().notNull(),
    lng: real().notNull(),
    locationId: integer().notNull().references(() => location.id),
    userId: integer().notNull().references(() => user.id),
    createdAt: integer().notNull().$default(() => Date.now()),
    updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
