import * as z from 'zod';

export const postSchema = z.object({
    name: z.string().max(128, 'The name must be 128 characters or shorter.').nonempty('The name is required.'),
    description: z.nullish(z.string())
})