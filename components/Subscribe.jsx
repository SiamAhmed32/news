import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-podcast-icon lucide-podcast"
          >
            <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
            <path d="M8 14a5 5 0 1 1 8 0" />
            <circle cx="12" cy="11" r="1" />
            <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
          </svg>
        </div>
        <span className="text-sm font-medium">5,810</span>
      </div>
    </div>
  );
};

export default Subscribe;
