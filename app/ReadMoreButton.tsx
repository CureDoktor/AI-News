"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const serializedObject = JSON.stringify(article);

    sessionStorage.setItem("article", serializedObject);
    const queryString = Object.entries(article)
      .map(([key, value]) => {
        // Check if the value is null, if so, return an empty string
        if (value === null) return "";
        // Otherwise, encode the key and value
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .filter(Boolean) // Remove empty strings
      .join("&");

    const url = `/article/slug?${queryString}`;

    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 text-white h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-100 hover:text-orange-500 transition duration-400"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
