import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from "lucide-react";

export default function BlogPostDetail({ post }) {
  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
            Post not found
          </h2>
          <Link
            href="/blogs"
            className="text-primary hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <Link
        href="/blogs"
        className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to all posts
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-slate-100 dark:ring-slate-800">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                {post.author.name}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-800">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-medium leading-relaxed">
          {post.excerpt}
        </p>

        {/* Placeholder for body content since not provided in data structure */}
        <div className="text-slate-700 dark:text-slate-300 space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h3>Why this matters</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </article>
  );
}
