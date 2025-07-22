import { z } from 'zod';

import tryParseEnv from './try-parse-env';

const EnvSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']),
    TURSO_CONNECTION_URL: z.string(),
    TURSO_AUTH_TOKEN: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default process.env;
