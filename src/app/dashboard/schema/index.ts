
import * as z from "zod";

export const BlogFormSchema = z
  .object({
    title: z.string().min(5, {
      message: "Title must be at least 5 characters.",
    }),
    image_url: z.string().url({ message: "Invalid url" }),
    content: z.string().min(50, {
      message: "Content must be at least 50 characters.",
    }),
    isPremium: z.boolean(),
    isPublish: z.boolean(),
  })
  .refine(
    (data) => {
      const image_url = data.image_url;
      try {
        const url = new URL(image_url);

        return url.hostname === "images.unsplash.com";
      } catch (error) {
        return false;
      }
    },
    {
      message: "Currently we are only supporting the image from unsplash",
      path: ["image_url"],
    },
  );

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;
