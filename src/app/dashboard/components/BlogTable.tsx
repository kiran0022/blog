import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  EyeOpenIcon,
  Pencil1Icon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import React from "react";

const BlogTable = () => {
  return (
    <div className="overflow-auto">
      <div className="bg-graident-dark items-center rounded-md border">
        <div className="grid grid-cols-6 items-center border-b p-5 font-semibold">
          <h3 className="col-span-2">Title</h3>
          <h3>Premium</h3>
          <h3>Publish</h3>
        </div>
        <div className=" grid grid-cols-6 p-5">
          <h3 className="col-span-2"> Blog item</h3>
          <Switch checked={false}/>
          <Switch checked={true} />

          <div className="col-span-2">
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;

const Actions = () => {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      <Button variant={"outline"} className="flex gap-1">
        <EyeOpenIcon /> View
      </Button>
      <Button variant={"outline"} className="flex gap-1">
        <TrashIcon /> Delete
      </Button>
      <Button variant={"outline"} className="flex gap-1">
        <Pencil1Icon /> Edit
      </Button>
    </div>
  );
};
