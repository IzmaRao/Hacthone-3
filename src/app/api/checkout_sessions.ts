import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia', // Use the required API version
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract stripePriceId from request body
      const { stripePriceId } = req.body as { stripePriceId: string };

      if (!stripePriceId) {
        return res.status(400).json({ error: 'Missing stripePriceId' });
      }

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: stripePriceId,
            quantity: 1,
          },
        ],
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.redirect(303, session.url!);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
