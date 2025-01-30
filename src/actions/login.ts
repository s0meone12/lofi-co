"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas"

export const login = async (values: z.infer<typeof LoginSchema>) =>{
    const validatedField = LoginSchema.safeParse(values);

    console.log("validated fields are here", validatedField)
    if(!validatedField.success){
        return {error: "Invalid fields!"};
    }

    return {
       success: "User logged in sucessfully."
    };
};