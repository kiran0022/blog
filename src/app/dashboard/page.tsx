import React from "react";
import Navlink from "./components/Navlink";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import BlogTable from "./components/BlogTable";

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <div className="mt-5 flex items-center justify-between">
        <h2 className="text-xl font-bold">Blogs</h2>

        <Link href={"/dashboard/blog/create"}>
          <Button variant={"outline"} className="flex items-center gap-2">
            <PlusIcon className="mr-1" /> Create
          </Button>
        </Link>
      </div>
      <BlogTable />
    </div>
  );
};

export default Dashboard;
