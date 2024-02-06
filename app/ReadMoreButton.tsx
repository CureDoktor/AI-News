"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => {
        // Check if the value is null, if so, return an empty string
        if (value === null) return "";
        // Otherwise, encode the key and value
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .filter(Boolean) // Remove empty strings
      .join("&");

    const url = `/article?${queryString}`;

    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
