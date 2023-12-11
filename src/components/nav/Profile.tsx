import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useUser } from "@/lib/users";
import Image from "next/image";
import { DashboardIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

const Profile = () => {
  const { user, setUser } = useUser();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleLogout = () => {
    supabase.auth.signOut();
    setUser(undefined);
  };

  const userDetails = user?.user_metadata;

  const isAdmin = userDetails?.role === "admin";

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={userDetails?.avatar_url}
          alt={userDetails?.full_name}
          width={500}
          height={500}
          className=" h-8 w-8 rounded-full ring-2 ring-zinc-900"
        />
      </PopoverTrigger>

      <PopoverContent className="mt-1 space-y-2 divide-y rounded-lg bg-black/50 text-base ">
        <div className="p-4 ">
          <p className="text-slate-50">{userDetails?.full_name}</p>
          <p className="text-xs text-gray-400"> {userDetails?.email}</p>
        </div>
        {isAdmin && (
          <div>
            <Link href={"/dashboard"}>
              <Button
                variant={"ghost"}
                className="flex w-full justify-between "
              >
                Dashboard
                <DashboardIcon />
              </Button>
            </Link>
          </div>
        )}

        <Button
          variant={"ghost"}
          className="flex w-full justify-between"
          onClick={handleLogout}
        >
          Logout
          <LockOpen1Icon />
        </Button>
      </PopoverContent>
    </Popover>
    // <DropdownMenu >
    //   <DropdownMenuTrigger>

    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuLabel>{userDetails?.email}</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem className="space-x-2">
    //       <DashboardIcon /> <p>Dashboard</p>{" "}
    //     </DropdownMenuItem>
    //     <DropdownMenuItem className="space-x-2">
    //       {" "}
    //       <LockOpen2Icon />
    //       <p>Logout</p>{" "}
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};

export default Profile;
