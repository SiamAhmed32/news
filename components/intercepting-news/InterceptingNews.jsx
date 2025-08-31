import React from "react";
import newsData from "../../lib/newsData.json";
import Image from "next/image";
import { notFound } from "next/navigation";

const InterceptingNews = ({ newsId }) => {
  const selectedNews = newsData.find((news) => news.article_id === newsId);

  if (!selectedNews) {
    notFound();
  }

  const imageUrl =
    selectedNews.image_url ||
    "https://placehold.co/1200x600/171717/FFF?text=The+News+Island";
  const avatarUrl =
    selectedNews.avatar || "https://placehold.co/40x40/EEE/3C3C3C?text=A";
  const title = selectedNews.title || "Title not available";
  const content = selectedNews.content || "Content not available.";
  const author = selectedNews.author || "Unknown Author";
  const category = selectedNews.category?.[0] || "General";
  const pubDate = selectedNews.pubDate
    ? new Date(selectedNews.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="p-6 md:p-10 lg:p-16">
      <article>
        {/* Article Header */}
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
            {category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            <div className="flex items-center space-x-3">
              <Image
                src={avatarUrl}
                alt={author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {author}
                </p>
                <p>{pubDate}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="my-12">
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={600}
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="prose prose-lg lg:prose-xl max-w-3xl mx-auto prose-p:text-gray-700 prose-headings:text-gray-900 dark:prose-invert">
          {content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default InterceptingNews;
