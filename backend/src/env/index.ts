import 'dotenv/config';
import { z } from 'zod';

const ENV_SCHEMA = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333),
});

const _env = ENV_SCHEMA.safeParse(process.env);

if (_env.success === false) {
    console.error('Variaveis de Ambiente Invalidas', _env.error.format());

    throw new Error('Variaveis de Ambiente invalidas');
}

export const env = _env.data;
