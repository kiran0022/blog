import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  EyeOpenIcon,
  Link1Icon,
  RocketIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";

const CreateBlog = () => {
  return (
    <div className="rounded-md border p-2">
      <div className="flex justify-between border-b py-2">
        <div className="flex gap-3">
          <Button variant={"ghost"} className="flex gap-1">
            {" "}
            <EyeOpenIcon /> Preview{" "}
          </Button>
          <Button variant={"ghost"} className="flex gap-1">
            {" "}
            <StarIcon /> Premium{" "}
          </Button>
          <Button variant={"ghost"} className="flex gap-1">
            {" "}
            <RocketIcon /> Publish{" "}
          </Button>
        </div>
        <div>
          <Button variant={"outline"} className="flex gap-1">
            {" "}
            <DownloadIcon /> Save{" "}
          </Button>
        </div>
      </div>
      <div>
        <h3>Blog title</h3>

        <div>
          <Link1Icon />
          <label id={"image_url"}>Image url</label>
          <input type="text" />
        </div>
        <textarea name="content" id="content" cols={30} rows={10}></textarea>
      </div>
    </div>
  );
};

export default CreateBlog;
