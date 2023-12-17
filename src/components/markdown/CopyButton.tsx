"use client";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export default function CopyButton({ id }: { id: string }) {
  const [onCopy, setCopy] = useState(false);
  const [onDone, setDone] = useState(false);
  const handleCopy = async () => {
    const text = document.getElementById(id)?.textContent;
    setCopy(true);
    try {
      await navigator.clipboard.writeText(text!);
    } catch (error) {
      console.log("error copy");
    }
  };
  return (
    <div
      onClick={handleCopy}
      className="relative cursor-pointer rounded-md p-2 hover:scale-105 hover:bg-zinc-700 "
    >
      <CheckIcon
        className={cn(
          "h-5 w-5 cursor-pointer text-emerald-500 transition-all",
          onDone ? "scale-100" : "scale-0",
        )}
        onTransitionEnd={() => {
          setTimeout(() => {
            setCopy(false);
            setDone(false);
          }, 500);
        }}
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <CopyIcon
          className={cn("transition-all", onCopy ? "scale-0" : "scale-100")}
          onTransitionEnd={() => {
            if (onCopy) {
              setDone(true);
            }
          }}
        />
      </div>
    </div>
  );
}
