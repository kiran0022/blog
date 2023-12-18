import { readBlog } from "@/lib/actions/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: blogs } = await readBlog();
  return (
    <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 xl:p-0">
      {blogs?.map((blog, _idx) => {
        return (
          <Link
            href={process.env.SITE_URL + "/blog/" + blog.id}
            key={_idx}
            className="w-full cursor-pointer space-y-4 rounded-md border bg-graident-dark p-5 ring-purple-500 transition-all hover:ring-2 first:md:col-span-3 first:lg:col-span-2"
          >
            <div className="relative h-72 w-full md:h-64 xl:h-96">
              <Image
                priority
                src={blog.image_url}
                className=" object-cover object-center"
                alt={blog.title + "image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px): 50vw, 33vw"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                {new Date(blog.created_at).toDateString()}
              </p>
              <h1 className="tex-xl overflow-clip font-bold">{blog.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
