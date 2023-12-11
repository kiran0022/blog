"use client";
import React from "react";

const loading = () => {
  return (
    <div className="animate-pulse">
      
      <div
        className="isolate
    overflow-hidden
    shadow-xl shadow-black/5
    before:border-t before:border-rose-100/10"
      >
        <div
          className="relative 
    before:absolute before:inset-0
    before:-translate-x-full
    before:animate-[shimmer_1.5s_infinite]
    before:bg-gradient-to-r
    before:from-transparent before:via-rose-100/10 before:to-transparent"
        >
          <div className="space-y-5 rounded-2xl bg-white/5 p-4">
            <div className="h-24 rounded-lg bg-rose-100/10"></div>
            <div className="space-y-3">
              <div className="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
              <div className="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
              <div className="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
            </div>
          </div>
        </div>
        
      </div>

      {/* <div class="space-y-5 rounded-2xl bg-white/5 p-4">
  <div class="h-24 rounded-lg bg-rose-100/10"></div>
  <div class="space-y-3">
    <div class="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
    <div class="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
    <div class="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
  </div>
</div>
<div
  class="
    [...]
    bg-gradient-to-r from-transparent via-rose-100/10 to-transparent"
></div> */}

      {/* <div className="overflow-hidden relative space-y-5 rounded-2xl bg-gray-900 bg-gradient-to-r from-transparent via-gray-600 to-transparent p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent">
        <div className="h-32 rounded-lg bg-gray-600"></div>
        <div className="space-y-3">
          <div className="h-3 rounded-lg bg-gray-600"></div>
          <div className="h-3 rounded-lg bg-gray-600"></div>
          <div className="h-3 rounded-lg bg-gray-600"></div>
        </div>
      </div> */}
    </div>
  );
};

export default loading;
