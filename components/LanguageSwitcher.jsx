"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LanguageSwitcher = ({lang}) => {
  const pathname = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      {/* English Button */}
      <Link
        href={redirectedPathName("en")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "en" ? "bg-black text-white" : "hover:bg-gray-100"
        }`}
      >
        EN
      </Link>

      <span className="text-gray-400">|</span>

      {/* Bengali Button */}
      <Link
        href={redirectedPathName("bn")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "bn" ? "bg-black text-white" : "hover:bg-gray-100"
        }`}
      >
        বাং
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
