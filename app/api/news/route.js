import { NextResponse } from "next/server";
import newsData from "../../../lib/newsData.json";

export async function GET(request) {
  return NextResponse.json(newsData);
}
