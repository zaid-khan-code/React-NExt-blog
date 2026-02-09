"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Image */}

      <div className="relative w-full h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="space-y-4">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                {post.author.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {post.date}
              </p>
            </div>
          </div>

          {/* Read Time */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 pt-0">
        <button className="w-full px-4 py-2 text-slate-900 dark:text-white font-medium border border-slate-900 dark:border-white rounded-lg hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors">
          <Link href={`/blogs/${post.id}`}>
          Read More
          </Link>
        </button>
      </div>
    </article>
  );
}
