import Head from "next/head";
import BlogsPage from "@/components/blog/BlogsPage";

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs | InsightBlog</title>
      </Head>
      <BlogsPage />
    </>
  );
}
