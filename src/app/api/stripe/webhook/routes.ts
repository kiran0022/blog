import { headers } from 'next/headers';
import { buffer } from 'stream/consumers';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SK_KEY!)
const endpointSecret = process.env.END_POINT_SECRET!

export async function POST(request: any) {
    const rawBody = await buffer(request.body)

    let event;
    try {
        const sig = headers().get('stripe-signature');


        event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    } catch (err: any) {
        return Response.json({ error: "webhook error" + err?.message })
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntentSucceeded = event.data.object;
            console.log(paymentIntentSucceeded);

            // Then define and call a function to handle the event payment_intent.succeeded
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return Response.json({})
    // Return a 200 response to acknowledge receipt of the event
}