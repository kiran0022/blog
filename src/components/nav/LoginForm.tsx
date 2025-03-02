"use client";
import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

const LoginForm = () => {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
    // console.log("location origin log ", location.origin);
  };

  return (
    <Button variant={"outline"} className="space-x-2" onClick={handleLogin}>
      <GitHubLogoIcon />
      <p>login</p>
    </Button>
  );
};

export default LoginForm;
