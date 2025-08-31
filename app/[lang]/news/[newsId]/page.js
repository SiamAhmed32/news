import React from "react";
import newsData from "../../../../lib/newsData.json";
import Image from "next/image";
import Sidebar from "@/components/SingleNewsDetails/Sidebar";
import SocialActions from "@/components/SingleNewsDetails/SocialActions";
import { notFound } from "next/navigation";
const page = ({ params: { newsId } }) => {
  const selectedNews = newsData.find((news) => news.article_id === newsId);
  if(!selectedNews){
    notFound()
  }
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              {selectedNews.title}
            </h1>
          </header>

          <div className="mb-8">
            <Image
              src={selectedNews.image_url}
              alt={selectedNews.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              {selectedNews.description}
            </p>

            <p className="text-lg leading-relaxed mb-8">
              {selectedNews.content}
            </p>
          </div>
          <SocialActions />
        </article>

        <Sidebar news={selectedNews} />
      </div>
    </main>
  );
};

export default page;
