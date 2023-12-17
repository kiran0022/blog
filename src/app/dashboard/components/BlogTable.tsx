import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { readBlogAdmin, updateBlogById } from "@/lib/actions/blog";
import {
  EyeOpenIcon,
  Pencil1Icon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import React from "react";
import DeleteAlert from "./DeleteAlert";
import SwitchForm from "./SwitchForm";
import { BlogFormSchemaType } from "../schema";
import Link from "next/link";

const BlogTable = async () => {
  const { data: blogs } = await readBlogAdmin();

  return (
    <div className="overflow-auto">
      <div className="items-center rounded-md border bg-graident-dark">
        <div className="grid grid-cols-6 items-center border-b p-5 font-semibold">
          <h3 className="col-span-2">Title</h3>
          <h3>Premium</h3>
          <h3>Publish</h3>
        </div>
        {blogs?.map((blog, _idx) => {
          const updatePremium = updateBlogById.bind(null, blog.id, {
            isPremium: !blog.isPremium,
          } as BlogFormSchemaType);
          const updatePublish = updateBlogById.bind(null, blog.id, {
            isPublish: !blog.isPublish,
          } as BlogFormSchemaType);
          return (
            <div key={_idx} className=" grid grid-cols-6 items-center p-5">
              <h3 className="col-span-2 overflow-clip"> {blog.title}</h3>
              <SwitchForm
                checked={blog.isPremium}
                onToggle={updatePremium}
                name={"Premium"}
              />
              <SwitchForm
                checked={blog.isPublish}
                onToggle={updatePublish}
                name={"Publish"}
              />

              <div className="col-span-2">
                <Actions id={blog.id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogTable;

const Actions = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      <Link href={"/blog/" + id}>
        <Button variant={"outline"} className="flex gap-1">
          <EyeOpenIcon /> View
        </Button>
      </Link>
      <DeleteAlert blogId={id} />
      <Link href={"/dashboard/blog/edit/" + id}>
        <Button variant={"outline"} className="flex gap-1">
          <Pencil1Icon /> Edit
        </Button>
      </Link>
    </div>
  );
};
