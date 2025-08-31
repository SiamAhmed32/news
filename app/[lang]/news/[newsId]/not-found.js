import Link from "next/link";
import React from "react";

const NewsNotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-250px)] text-center px-4">
      <div>
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Article Not Found
        </h1>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
          The news article you are looking for does not exist, may have been
          moved, or was deleted.
        </p>

        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NewsNotFoundPage;
