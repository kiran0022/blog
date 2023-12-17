import { cn } from "@/lib/utils";
import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark-dimmed.css";
import { PiTerminalThin } from "react-icons/pi";
import CopyButton from "./CopyButton";
import { icons } from "@/lib/icons";
export default function MarkdownPreview({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      className={cn("space-y-5", className)}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className="text-3xl font-bold" />;
        },
        h2: ({ node, ...props }) => {
          return <h1 {...props} className="text-2xl font-bold" />;
        },
        h3: ({ node, ...props }) => {
          return <h1 {...props} className="text-xl font-bold" />;
        },
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          if (match?.length) {
            let Icon = PiTerminalThin;
            const isMatch = icons.hasOwnProperty(match[1]);
            if (isMatch) {
              Icon = icons[match[1] as keyof typeof icons];
            }
            const id = (Math.floor(Math.random() * 100) + 1).toString();
            return (
              <div className="rounded-md bg-graident-dark text-gray-300">
                <div className="flex items-center justify-between border-b px-5 py-2">
                  <div className="flex items-center gap-2">
                    <Icon />
                    <span>
                      {
                        //@ts-ignore
                        node?.data?.meta
                      }
                    </span>
                  </div>
                  <CopyButton id={id} />
                </div>
                <div className=" w-full overflow-x-auto">
                  <div className="p-5" id={id}>
                    {children}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <code className="rounded-md bg-amber-400 px-2 text-white">
                {children}
              </code>
            );
          }
          return <div></div>;
        },
      }}
    >
      {content}
    </Markdown>
  );
}
