"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteBlogById } from "@/lib/actions/blog";
import { ChangeEvent, useTransition } from "react";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { cn } from "@/lib/utils";
export default function DeleteAlert({ blogId }: { blogId: string }) {
  const [isPending, startTransition] = useTransition();
  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await deleteBlogById(blogId);
      const { error } = JSON.parse(result);

      if (error?.message) {
        toast({
          title: "Failed to delete blog",
          description: (
            <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "Blog deleted successfully",
        });
      }
    });
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"outline"} className="flex gap-1">
            <TrashIcon /> Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form onSubmit={onSubmit}>
              <Button>
                <AiOutlineLoading
                  className={cn("animate-spin", { hidden: !isPending })}
                />
                Continue
              </Button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
