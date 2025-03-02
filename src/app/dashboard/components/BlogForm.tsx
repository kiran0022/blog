"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  EyeOpenIcon,
  StarIcon,
  RocketIcon,
  DownloadIcon,
  CopyIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { BlogFormSchemaType, BlogFormSchema } from "../schema/index";
import { IBlogDetail } from "@/lib/types";

export default function BlogForm({
  onHandleSubmit,
  blog,
}: {
  onHandleSubmit: (data: BlogFormSchemaType) => void;
  blog?: IBlogDetail;
}) {
  const [isPreview, setIsPreview] = useState(false);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof BlogFormSchema>>({
    mode: "all",
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: blog?.title || "",
      image_url: blog?.image_url || "",
      content: blog?.blog_content?.content || "",
      isPremium: blog?.isPremium || false,
      isPublish: blog?.isPublish || false,
    },
  });

  function onSubmit(data: z.infer<typeof BlogFormSchema>) {
    // console.log(" form data", data);

    startTransition(() => onHandleSubmit(data));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 rounded-md border pb-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-5">
          <div className="flex flex-wrap items-center gap-3 ">
            <span
              className="flex items-center gap-2 rounded-md bg-zinc-700 p-2 ring-zinc-400 hover:ring-1"
              role="button"
              onClick={() =>
                setIsPreview(
                  !isPreview && !form.getFieldState("image_url").invalid,
                )
              }
            >
              {!isPreview ? (
                <>
                  <EyeOpenIcon />
                  Preview
                </>
              ) : (
                <>
                  <Pencil1Icon />
                  Edit
                </>
              )}
            </span>

            <FormField
              control={form.control}
              name="isPremium"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className="flex items-center gap-2  rounded-md
                  bg-zinc-700 p-2 ring-zinc-400 hover:ring-1"
                    >
                      <StarIcon />
                      <span>Premium</span>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPublish"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className="flex items-center gap-2  rounded-md
                  bg-zinc-700 p-2 ring-zinc-400 hover:ring-1"
                    >
                      <RocketIcon />
                      <span>Publish</span>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button
            variant={"default"}
            disabled={!form.formState.isValid}
            className={cn(
              "group flex items-center gap-2 rounded-md bg-zinc-800 px-3  py-2 text-sm transition-all disabled:border-gray-800 disabled:bg-gray-900",
              {
                "animate-pulse": isPending,
              },
            )}
            // className={cn("mt-0", { "mt-2": window.screen.width <= 523 })}
          >
            <Bookmark className="p-1" /> save
          </Button>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "flex w-full gap-2 break-words p-2",
                    isPreview ? "divide-x-0" : "divide-x",
                  )}
                >
                  <Input
                    placeholder="Title"
                    {...field}
                    className={cn(
                      "border-none text-lg font-medium leading-relaxed ",
                      isPreview ? "w-0 p-0" : "w-full lg:w-1/2",
                    )}
                  />
                  <div
                    className={cn(
                      "lg:px-10",
                      isPreview
                        ? "mx-auto w-full lg:w-4/5"
                        : "hidden w-1/2 lg:block",
                    )}
                  >
                    <h1 className="text-3xl font-medium ">
                      {form.getValues().title}
                    </h1>
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("title").invalid &&
                form.getValues().title && (
                  <FormMessage className="p-2 text-red-400" />
                )}
            </FormItem>
          )}
        />

        {/* https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}

        {/* image */}

        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "flex w-full gap-2 break-words p-2",
                    isPreview ? "divide-x-0" : "divide-x",
                  )}
                >
                  <Input
                    placeholder="Image url"
                    {...field}
                    className={cn(
                      "border-none text-lg font-medium leading-relaxed ",
                      isPreview ? "w-0 p-0" : "w-full lg:w-1/2",
                    )}
                    type="url"
                  />
                  <div
                    className={cn(
                      "lg:px-10",
                      isPreview
                        ? "mx-auto w-full lg:w-4/5"
                        : "hidden w-1/2 lg:block",
                    )}
                  >
                    {isPreview ? (
                      <>
                        <div className="relative mt-5 h-80 rounded-md border">
                          <Image
                            src={form.getValues().image_url}
                            alt={"preview"}
                            fill
                            className="rounded-md object-cover object-center"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p>Click on Preview to see image</p>
                      </>
                    )}
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("image_url").invalid &&
                form.getValues().image_url && (
                  <FormMessage className="p-2 text-red-400" />
                )}
            </FormItem>
          )}
        />

        {/* content */}

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "flex w-full gap-2 break-words p-2",
                    !isPreview ? "h-70vh divide-x " : "divide-x-0",
                  )}
                >
                  <Textarea
                    placeholder={"Content\n\n [...try with markdown format]"}
                    {...field}
                    className={cn(
                      "h-full resize-none border-none text-lg font-medium leading-relaxed",
                      isPreview ? "w-0 p-0" : "w-full lg:w-1/2",
                    )}
                  />
                  <div
                    className={cn(
                      "overflow-y-auto lg:px-10",
                      isPreview
                        ? "mx-auto w-full lg:w-4/5"
                        : "hidden w-1/2 lg:block",
                    )}
                  >
                    <MarkdownPreview content={form.getValues().content} />
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("content").invalid &&
                form.getValues().content && (
                  <FormMessage className="p-2 text-red-400" />
                )}
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
