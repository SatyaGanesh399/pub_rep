import React, { useState, useEffect } from "react";
import { getBlogList } from "@src/actions/general-actions";
import Link from "next/link";
import css from "./index.module.scss";
export default function BlogCategory() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    getBlogList().then(data => {
      setBlogs(data);
    });
  }, []);
  return (
    <>
      <div className={css.blogRecentPost}>
        <div className={css.blogBar}></div>
        <h1>Recent posts</h1>
        {blogs && (
          <div>
            <Link
              href={`${blogs[blogs.length - 1].slug}`}
              key={blogs[blogs.length - 1].id}
            >
              <span>
                <div className={css.blogPost}>
                  <img
                    className={css.blogPostImage}
                    src={blogs[blogs.length - 1].blog_bgImg}
                  />
                  <div className={css.blogPostDescription}>
                    <h2>{blogs[blogs.length - 1].title}</h2>
                  </div>
                </div>
              </span>
            </Link>
            <Link
              href={`${blogs[blogs.length - 2].slug}`}
              key={blogs[blogs.length - 2].id}
            >
              <span>
                <div className={css.blogPost}>
                  <img
                    className={css.blogPostImage}
                    src={blogs[blogs.length - 2].blog_bgImg}
                  />
                  <div className={css.blogPostDescription}>
                    <h2>{blogs[blogs.length - 2].title}</h2>
                  </div>
                </div>
              </span>
            </Link>
            <Link
              href={`${blogs[blogs.length - 3].slug}`}
              key={blogs[blogs.length - 3].id}
            >
              <span>
                <div className={css.blogPost}>
                  <img
                    className={css.blogPostImage}
                    src={blogs[blogs.length - 3].blog_bgImg}
                  />
                  <div className={css.blogPostDescription}>
                    <h2>{blogs[blogs.length - 3].title}</h2>
                  </div>
                </div>
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
