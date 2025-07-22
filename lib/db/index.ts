import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

import env from '../env';
import * as schema from './schema';

config({ path: '.env' });
export const db = drizzle({
    connection: {
        url: env.TURSO_CONNECTION_URL!,
        authToken: env.NODE_ENV === 'development' ? undefined : env.TURSO_AUTH_TOKEN!,
    },
    casing: 'snake_case',
    schema,
});

export default db;
