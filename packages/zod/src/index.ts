import z from 'zod';

export const signUpSchema = z.object({
    name : z.string(),
    phoneNumber : z.bigint(),
    email       : z.string(),
    password    : z.string().min(6)
})

export type SignUpType = z.infer<typeof signUpSchema>;