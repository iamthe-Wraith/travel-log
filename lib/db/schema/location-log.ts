import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { location } from './location';

export const locationLog = sqliteTable('location_log', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    startedAt: integer('started_at').notNull(),
    endedAt: integer('ended_at').notNull(),
    lat: real('lat').notNull(),
    lng: real('lng').notNull(),
    locationId: integer('location_id').notNull().references(() => location.id),
    createdAt: integer('created_at').notNull().$default(() => Date.now()),
    updatedAt: integer('updated_at').notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
