"use client";
import React from "react";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/users";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <nav className="flex items-center justify-between">
      <Link href={"/"}>
        <h2 className="group text-3xl font-bold">
          No idea?
          <p className="h-1 w-0 bg-white transition-all group-hover:w-full"></p>
        </h2>
      </Link>
      {/* <LoginForm /> */}
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
};

export default Navbar;
