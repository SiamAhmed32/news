"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import newsData from "../../lib/newsData.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeatureStory = () => {
  const featuredStory = newsData[10];

  const imageUrl =
    featuredStory?.image_url ||
    "https://placehold.co/1200x600/171717/FFF?text=The+News+Island";
  const avatarUrl =
    featuredStory?.avatar || "https://placehold.co/40x40/EEE/3C3C3C?text=A";
  const title = featuredStory?.title || "Title Not Available";
  const author = featuredStory?.author || "Unknown Author";
  const category = featuredStory?.category?.[0] || "Featured";
  const pubDate = featuredStory?.pubDate
    ? new Date(featuredStory.pubDate).toLocaleDateString()
    : "";

  const calculateReadingTime = (content) => {
    const wordsPerMinute = 230;
    const wordCount = content?.split(/\s+/).length || 0;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Link href={`/news/${featuredStory.article_id}`} className="block group">
        <article className="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden h-[32rem] text-white">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <motion.div
            className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4 lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider"
            >
              {category}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-bold leading-tight mt-4 mb-3 transition-colors duration-300 group-hover:text-teal-300"
            >
              {title}
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 text-sm text-gray-200"
            >
              <Image
                src={avatarUrl}
                alt={author}
                width={40}
                height={40}
                className="rounded-full border-2 border-white/50"
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold">{author}</span>
                <span className="text-xs opacity-80">{pubDate}</span>
              </div>
              <span className="opacity-50">•</span>
              <span className="text-xs opacity-80">
                {calculateReadingTime(featuredStory.content)}
              </span>
            </motion.div>
          </motion.div>
        </article>
      </Link>
    </motion.section>
  );
};

export default FeatureStory;
