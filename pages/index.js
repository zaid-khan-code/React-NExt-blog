import Head from "next/head";
import BlogLandingPage from "@/components/blog/BlogLandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>InsightBlog</title>
      </Head>
      <BlogLandingPage />
    </>
  );
}
