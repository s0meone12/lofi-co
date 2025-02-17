import type { NextAuthConfig } from "next-auth";

import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"

import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if(validatedFields.success){
                    const {email, password} = validatedFields.data;

                    const user = await getUserByEmail(email)

                    if(!user || !user.password) {
                        return null;
                    }

                    const passwordMatched = await bcrypt.compare(password, user.password);

                    if(passwordMatched) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig