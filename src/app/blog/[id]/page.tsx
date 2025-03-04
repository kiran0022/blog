import { IBlog } from "@/lib/types";
import React from "react";
import Image from "next/image";
import BlogContent from "./components/BlogContent";
export default async function page({ params }: { params: { id: string } }) {
  // const { data } = await (
  //   await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/blog/?id=" + params.id)
  // ).json();

  // const blog: IBlog = data;

  const { data: blog } = (await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/blog/?id=" + params.id,
  ).then((data) => data.json())) as { data: IBlog };

  console.log(blog?.id);

  if (!blog?.id) {
    return <h1 className="text-4xl">not found {blog?.id} </h1>;
  }
  //   console.log(blog);
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-5xl space-y-10 pt-10">
        <div>
          <h1 className="text-2xl font-bold">{blog?.title}</h1>
          <p className=" text-sm text-gray-400">
            {new Date(blog?.created_at || "").toDateString()}
          </p>
        </div>
        <div className="relative h-96 w-full">
          <Image
            priority
            src={blog?.image_url || "/"}
            className=" object-cover object-center"
            alt={blog?.title + "image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width:1200px): 50vw, 33vw"
          />
        </div>
        <BlogContent blog_id={blog.id} />
      </div>
    </div>
  );
}
