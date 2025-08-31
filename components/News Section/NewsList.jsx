import React from "react";
import NewsDetails from "./NewsDetails";
import newsData from "../../lib/newsData.json";

const NewsList = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Latest Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <NewsDetails key={news.article_id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsList;
