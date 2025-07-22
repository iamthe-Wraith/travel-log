import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { locationLog } from './location-log';

export const locationLogImage = sqliteTable('location_log_image', {
    id: integer('id').primaryKey(),
    key: text('key').notNull(),
    locationLogId: integer('location_log_id').notNull().references(() => locationLog.id),
    createdAt: integer('created_at').notNull().$default(() => Date.now()),
    updatedAt: integer('updated_at').notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
