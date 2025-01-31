"use server"
import { signOut } from "@/auth";
import { NextResponse } from "next/server";

export async function POST() {
  await signOut();
  return NextResponse.json({ success: true });
}
