import { notFound } from "next/navigation";
import React from "react";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  // Check if searchParams is undefined or an empty object
  if (!searchParams || Object.keys(searchParams).length === 0) {
    return notFound();
  }

  // Ensure searchParams is initialized before accessing its properties
  const { title, author, source, published_at, description, image } = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={image}
            alt={title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {author}</h2>
            <h2 className="font-bold pl-4">Source: {source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={published_at} />
            </p>
          </div>
          <p className="pt-4">{description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;