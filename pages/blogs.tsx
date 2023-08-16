import Head from "next/head";
import BlogsPage from "@page-components/blogs";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <BlogsPage />
    </>
  );
};

export default Blogs;
