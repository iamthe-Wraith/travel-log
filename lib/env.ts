import { z } from 'zod';

const EnvSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
