"use client";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect, useState } from "react";

export default function BlogContent({ blog_id }: { blog_id: string }) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const [blog, setBlog] = useState<{
    blog_id: string;
    content: string;
    created_at: string;
  } | null>();
  const readBlogContent = async () => {
    const { data } = await supabase
      .from("blog_content")
      .select("*")
      .eq("blog_id", blog_id)
      .single();

    setBlog(data);
  };

  useEffect(() => {
    readBlogContent();
    // eslint-disable-next-line
  }, [blog_id]);

  return (
    <div>
      <MarkdownPreview content={blog?.content || "null"} />
    </div>
  );
}
