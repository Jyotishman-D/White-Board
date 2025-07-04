import { z } from "zod"

export const signUpSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    password: z.string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(20, { message: "Password must be at most 20 characters long" })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
});

export const signInschema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .max(20, { message: "Password must be at most 20 characters long" })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
});

export const createRoomSchema = z.object({
    slug: z.string().min(2, { message: "Slug is required" })
})