"use client";
import { cn } from "@/lib/utils";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = () => {
  const pathname = usePathname();
  const links = [
    {
      href: "/dashboard",
      text: "dashboard",
      Icon: ReaderIcon,
    },
    {
      href: "/dashboard/user",
      text: "user",
      Icon: PersonIcon,
    },
  ];
  return (
    <div className="mb-2 flex items-center gap-5 border-b pb-2">
      {links.map(({ href, text, Icon }, idx) => (
        <Link
          key={idx}
          href={href}
          className={cn("flex items-center gap-1 hover:underline", {
            "rounded-md font-semibold text-violet-500 underline":
              pathname === href,
          })}
        >
          <Icon />/{text}
        </Link>
      ))}
    </div>
  );
};

export default Navlink;
