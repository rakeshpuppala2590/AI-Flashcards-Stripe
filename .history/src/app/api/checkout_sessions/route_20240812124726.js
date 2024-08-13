import { NextResponse } from "next/server";
import { Stripe } from "@stripe/stripe-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});
export async function POST(req) {}
