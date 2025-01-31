"use server"

import bcrypt from "bcryptjs"

import { db } from "@/lib/db"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) =>{
    const validatedField = RegisterSchema.safeParse(values);

    console.log("validated fields are here", validatedField)
    if(!validatedField.success){
        return {error: "Invalid fields!"};
    }

    const {email, password, name} = validatedField.data;
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return {error : "Email already in use!"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    })

    //todo: send verification token email

    return {
       success: "User created!."
    };
};