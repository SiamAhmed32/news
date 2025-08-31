import Link from "next/link";
import React from "react";

const Sidebar = ({ news }) => {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-8 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">{news.author}</h3>
          <p className="text-sm text-gray-600 mb-4">{news.pubDate}</p>
        </div>

        <div>
          <p className="text-lg font-medium mb-2">{news.comments} comments</p>
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Join the discussion
          </Link>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Category</p>
          <p className="font-medium">{news.category[0]}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
