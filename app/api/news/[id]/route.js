import { NextResponse } from "next/server";
import newsData from "../../../../lib/newsData.json";
export async function GET(request, { params: { id } }) {
  const singleNews = newsData.find((news) => news.article_id === id);
  if (!singleNews) {
    return NextResponse.json({ message: "News not found" }, { status: 404 });
  }
  return NextResponse.json(singleNews);
}

export async function PATCH(request, { params: { id } }) {
  const newNews = await request.json();

  const requestKeys = Object.keys(newNews);
  const allowedKeys = ["title", "description"];

  const hasInvalidKeys = requestKeys.some((key) => !allowedKeys.includes(key));

  if (hasInvalidKeys) {
    return NextResponse.json(
      { message: "Error: Only 'title' and 'description' can be updated." },
      { status: 400 }
    );
  }
  const newsIndex = newsData.findIndex((news) => news.article_id === id);

  if (newNews.title) {
    newsData[newsIndex].title = newNews.title;
  }
  if (newNews.description) {
    newsData[newsIndex].description = newNews.description;
  }

  return NextResponse.json(newsData[newsIndex]);
}

export async function DELETE(request, { params: { id } }) {
  const newsIndex = newsData.findIndex((news) => news.article_id === id);
  const newsToDelete = newsData[newsIndex];
  newsData.splice(newsIndex, 1);
  return NextResponse.json(newsToDelete);
}
