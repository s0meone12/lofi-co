// LoginForm.tsx
'use client';

import * as z from "zod";
import React, { useState, useTransition } from 'react';
import { CardWrapper } from "./card-wrapper";
import { Button } from "../ui/button";
import { Form , FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from '@/schemas';
import { FormSuccess } from "../FormState/form-success";
import { FormError } from "../FormState/form-error";
import { login } from "@/actions/login";
import { Input } from "../ui/input";


export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {

            setSuccess(data.success || "");
            setError(data.error || "")
      });
    });

  };

  return (
    <CardWrapper 
      headerLabel='Welcome back'
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            {/* Using the imported FormInputField component */}
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input 
                        {...field} 
                        disabled={isPending} 
                        placeholder="john.doe@example.com" 
                        type="email" 
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input 
                        {...field} 
                        disabled={isPending} 
                        placeholder="******" 
                        type="password" 
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </div>
              {success && <FormSuccess message={success} />}
              {error && <FormError message={error} />}
          <Button 
            disabled={isPending} 
            type="submit" 
            className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
