"use client";

import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const MarqueBanner = ({ dictionary }) => {
  const bannerText =
    dictionary?.banner?.breaking_news_content ||
    "Climate Summit Reaches Historic Agreement. Tech Giants Announce AI Safety Protocols.";

  return (
    <div className="bg-gray-900 dark:bg-black text-white py-3 overflow-hidden border-y border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex-shrink-0 px-4">
          <span className="bg-teal-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
            {dictionary.banner.breaking_news || "Breaking News"}
          </span>
        </div>

        <div className="h-6 w-px bg-gray-700"></div>

        <div className="flex-grow overflow-hidden relative">
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
            whileHover={{ paused: true }}
          >
            <span className="text-sm tracking-wide px-4 whitespace-nowrap">
              {bannerText}
            </span>
            <span className="text-sm tracking-wide px-4 whitespace-nowrap">
              {bannerText}
            </span>
          </motion.div>

          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-900 dark:from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default MarqueBanner;
