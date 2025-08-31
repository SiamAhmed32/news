import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsDetails = ({ news }) => {
  const imageUrl =
    news?.image_url || "https://placehold.co/400x300/EEE/31343C?text=No+Image";
  const avatarUrl =
    news?.avatar || "https://placehold.co/24x24/EEE/31343C?text=A";
  const readingTime = Math.floor(Math.random() * 8) + 3;

  const displayDescription =
    news?.description && news.description.length > 20
      ? news.description
      : `${news?.content?.substring(0, 100) || "Content not available"}...`;

  return (
    <Link href={`/news/${news.article_id}`}>
      <article className="bg-white rounded-lg shadow-sm overflow-hidden news-card flex flex-col min-h-[450px]">
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            alt={news?.title || "Default Title"}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded capitalize">
                {news?.category?.[0] || "General"}
              </span>
              <span className="text-xs text-gray-500">
                {readingTime} min read
              </span>
            </div>
            <h3 className="text-xl font-medium mb-3 leading-tight truncate">
              {news?.title || "No Title"}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
              {displayDescription}
            </p>
          </div>
          <div className="flex items-center justify-between mt-auto flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src={avatarUrl}
                  alt={news?.author || "Author"}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-500 truncate">
                {news?.author || "Unknown Author"}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {news?.pubDate ? new Date(news.pubDate).toLocaleDateString() : ""}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsDetails;
