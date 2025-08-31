The News Island - A Modern News Portal
An advanced news portal built with Next.js 14, demonstrating cutting-edge features of the App Router. This project serves as a showcase of modern, production-ready front-end development practices, including Parallel and Intercepting Routes for a seamless modal experience, a robust backend API built with Route Handlers, and full internationalization (i18n) support for English and Bengali.

Live Link: thenewsisland.netlify.app
(Action Required: Replace the link above with a URL to a screenshot of your finished project)

Key Technical Features
This project was built to demonstrate a deep understanding of the Next.js App Router and modern web development patterns.

1. Advanced Routing & UI Patterns
Intercepting Routes: Clicking a news card on the homepage performs a "soft navigation." The URL changes to /news/[id], but the app intercepts this and renders a modal view of the article without leaving the homepage. This is achieved using the (.) route convention.

Parallel Routes: A dedicated @modal slot was created in the root layout to render the intercepted modal content. This demonstrates a key App Router feature for displaying conditional or parallel UI.

Fallback Full-Page Route: Refreshing the page at /news/[id] or visiting the URL directly serves a complete, dedicated server-rendered page for the article, ensuring a robust user experience and good SEO.

Advanced Error Handling:

A specific not-found.js is implemented for the /news/[id] route, showing a custom, language-aware "Article Not Found" message for invalid IDs.

A global not-found.js at the root provides a polished, user-friendly 404 page for any other invalid URL, also with language detection from request headers.

2. Internationalization (i18n)
Automatic Language Detection: A middleware.js file at the root uses negotiator and @formatjs/intl-localematcher to parse the browser's accept-language header and automatically redirect users to their preferred language (/en or /bn).

Dictionary-Based Content: All static UI text is managed through dictionary files (dictionaries/en.json and dictionaries/bn.json), which are loaded server-side via a helper function.

Language-Aware Nested Layout: A nested layout within app/[lang]/ receives the language parameter and passes the appropriate dictionary and lang props to shared components like the Header and Footer.

3. Backend API (Route Handlers)
A complete backend API is built using Next.js Route Handlers.

GET /api/news: Fetches the entire list of articles from data.json.

GET /api/news/[id]: Fetches a single article by its ID.

PATCH /api/news/[id]: Updates an article's title or description (in-memory) and includes robust error handling for invalid fields.

DELETE /api/news/[id]: Simulates deleting an article.

Note: This API is decoupled from the UI as per assignment requirements and can be tested with tools like Thunder Client or Postman.

4. Modern Frontend & UI/UX
Server Components: The majority of the application is built with React Server Components (RSCs) for optimal performance and fast page loads.

Client Components & Animation: Advanced components like the MarqueBanner are Client Components ("use client") that use framer-motion to create a smooth, hardware-accelerated, infinite scrolling animation with a professional "pause on hover" feature.

Performance Optimized: Uses next/font to completely eliminate Cumulative Layout Shift (CLS) from font loading and the next/image component with priority and sizes props for optimized image loading, including robust fallbacks for null or broken image URLs.

Tech Stack
Framework: Next.js 14 (App Router)

Library: React 18

Styling: Tailwind CSS

Animation: Framer Motion

i18n Libraries: negotiator, @formatjs/intl-localematcher

Getting Started
Follow these steps to run the project locally.

Prerequisites
Node.js (v18.17 or later recommended)

npm

Installation & Setup
Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

Navigate to the project directory:

cd your-repo-name

Install dependencies:

npm install

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result. The application will automatically redirect you to /en or /bn based on your browser's language settings.