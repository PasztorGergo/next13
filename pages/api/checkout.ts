import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).redirect("/").json({ message: "Bad request" });
  }
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1LbP6OAlaM3JXMGCbNspUbFb",
        quantity: 1,
      },
    ],
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/error`,
  });

  res.redirect(session.url as string);
}
