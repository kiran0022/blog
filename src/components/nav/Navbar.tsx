"use client";
import React from "react";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/users";
import Profile from "./Profile";

const Navbar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <nav className="flex items-center justify-between">
      <h2 className="group text-2xl">
        Publish it!
        <p className="h-1 w-0 bg-white transition-all group-hover:w-full"></p>
      </h2>
      {/* <LoginForm /> */}
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
};

export default Navbar;
