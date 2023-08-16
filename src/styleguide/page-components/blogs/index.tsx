import React, { useState, useEffect } from "react";
import Select3 from "@styleguide/components/select3";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "./index.module.scss";
import PageLayout from "@page-components/page-layout";
import { getBlogList } from "@src/actions/general-actions";
import BlogHero from "./blog-hero";

const BlogsPage = () => {
  // Query from Blog page category
  const router = useRouter();
  const { name } = router.query;
  const [blogs, setBlogs] = useState(null);
  const [filteredBlogData, setFilteredBlogData] = useState(blogs);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    getBlogList().then((data) => {
      setBlogs(data);
      setFilteredBlogData(data);
    });
  }, []);

  useEffect(() => {
    let result =
      blogs &&
      blogs.filter((res) => {
        return res.category === category;
      });
    setFilteredBlogData(result);
    console.log(category);
  }, [category]);

  useEffect(() => {
    setCategory(name as string);
    let result =
      blogs &&
      blogs.filter((res) => {
        return res.category === category;
      });
    setFilteredBlogData(result);
    console.log(category);
  }, [name]);

  return (
    <PageLayout>
      <>
        <BlogHero />
        <div className={css.blogSection}>
          <div className={css.blogSelectCategory} id="category">
            <div className={css.blogCategoryHeader}>
              <h1>Category</h1>
              <div className={css.blogCategoryHeaderBar}></div>
            </div>
            <div className={css.selectContainer}>
              <Select3 setCategory={setCategory} />
            </div>
          </div>
          <div className={css.blogCardContainer}>
            {filteredBlogData &&
              filteredBlogData.map((data) => (
                <div className={css.blogCard} key={data.id}>
                  <Link href={`blog/${data.slug}`}>
                    <span>
                      <img src={data.blog_bgImg} alt={data.slug} />
                      <h1>{data.title}</h1>
                      <p>
                        <strong>Author</strong>: {data.author}
                      </p>
                      <div className={css.blogCardCategory}>
                        {data.category.toUpperCase()}
                      </div>
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default BlogsPage;
