import { NextResponse } from "next/server";
import { Stripe } from "@stripe/stripe-js";
export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
}
