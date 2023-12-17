"use client";
import React from "react";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/users";
import Profile from "./Profile";
import Link from "next/link";
import { CrumpledPaperIcon, DashboardIcon } from "@radix-ui/react-icons";
import { RxCrumpledPaper } from "react-icons/rx";
const Navbar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <nav className="flex items-center justify-between">
      <Link href={"/"}>
        <h2 className="  group bg-gradient-to-r from-violet-300 to-violet-600  bg-clip-text text-3xl font-bold text-transparent">
          <p className="flex items-end ">
            N
            <RxCrumpledPaper className="mr-2 pb-1 pr-1 text-2xl font-bold text-white" />{" "}
            idea?
          </p>

          <p className="h-1 w-0 bg-gradient-to-r  from-purple-300 to-violet-600  transition-all group-hover:w-full"></p>
        </h2>
      </Link>
      {/* <LoginForm /> */}
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
};

export default Navbar;
