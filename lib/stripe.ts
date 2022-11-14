import * as Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

export const stripe = new Stripe.Stripe(
  process.env.STRIPE_SECRET_KEY || "",
  //@ts-ignore
  {}
);
export const stripeJS = loadStripe(process.env.STRIPE_PUBLIC_KEY || "");
