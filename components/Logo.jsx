import Link from "next/link";
import React from "react";

const Logo = ({ lang }) => {
  return (
    <div className="flex items-center">
      <Link href={`/${lang || "en"}`} className="flex items-center group">
        <svg
          className="w-10 h-10 inline-block mr-2"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 90 C 52 75, 52 60, 50 40"
            stroke="#854d0e"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          <g className="transition-transform duration-300 ease-in-out origin-bottom group-hover:rotate-[-3deg]">
            <path
              d="M50 40 Q 20 30, 10 55 Q 30 50, 50 40 Z"
              fill="#f3f4f6"
              stroke="#9ca3af"
              strokeWidth="1"
            />

            <path
              d="M25 45 L 40 42"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M22 48 L 38 45"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 51 L 36 48"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M50 40 Q 50 20, 60 10 Q 70 20, 50 40 Z"
              fill="#f3f4f6"
              stroke="#9ca3af"
              strokeWidth="1"
            />
            <path
              d="M51 32 L 55 20"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M51 35 L 56 25"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M50 40 Q 80 30, 90 55 Q 70 50, 50 40 Z"
              fill="#f3f4f6"
              stroke="#9ca3af"
              strokeWidth="1"
            />
            <path
              d="M75 45 L 60 42"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M78 48 L 62 45"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M81 51 L 64 48"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>

        <h1 className="text-xl font-bold tracking-wider text-gray-800 dark:text-gray-100">
          The News Island
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
