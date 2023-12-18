import React, { ChangeEvent, FormEvent, useTransition } from "react";
import { Button } from "../ui/button";
import { LightningBoltIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { useUser } from "@/lib/users";
import LoginForm from "../nav/LoginForm";
import { checkout } from "@/lib/actions/stripe";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const user = useUser((state) => state.user);

  const handleCheckout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const data = JSON.parse(
        await checkout(user?.user_metadata?.email, location.origin + pathname),
      );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

      await stripe?.redirectToCheckout({ sessionId: data.id });
    });
  };
  if (!user?.id) {
    return (
      <div className=" flex h-96 w-full items-center justify-center gap-2">
        <LoginForm /> to read
      </div>
    );
  }
  return (
    <form
      onSubmit={handleCheckout}
      className={cn("flex h-96 w-full items-center justify-center", {
        "animate-pulse": isPending,
      })}
    >
      <Button
        variant={"ghost"}
        className="flex flex-col gap-5 p-10 ring-2 ring-violet-600"
      >
        <span className="flex items-center gap-2 text-2xl font-bold text-violet-600">
          <LightningBoltIcon
            className={cn(
              "h-5 w-5",
              !isPending ? "animate-bounce" : "animate-spin",
            )}
          />{" "}
          Upgrade to pro
        </span>
        <span> UNLOCK! All blog contents now</span>
      </Button>
    </form>
  );
}
