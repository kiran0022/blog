"use server"

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SK_KEY!)

export async function checkout(email: string, redirectTo: string) {

    return JSON.stringify(await stripe.checkout.sessions.create({
        success_url: redirectTo || process.env.NEXT_PUBLIC_BASE_URL,
        cancel_url: process.env.NEXT_PUBLIC_BASE_URL,
        customer_email: email,
        line_items: [{ price: process.env.PRO_PRICE_ID_MONTHLY, quantity: 1 }],
        mode: 'subscription'

    }))


}