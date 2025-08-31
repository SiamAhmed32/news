import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 dark:bg-gray-900 text-center px-4">
      <div className="max-w-md">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-teal-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved, deleted, or maybe you just mistyped the URL.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition-colors w-full sm:w-auto"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
