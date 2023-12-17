import React from "react";

export default function loading() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="">
        <div className="bg-gradient-dark h-10 w-56 rounded-md "></div>
        <div className="bg-gradient-dark h-10 w-56 rounded-md "></div>
        <div className="h-96 rounded-md border bg-graident-dark"></div>
      </div>
    </div>
  );
}
