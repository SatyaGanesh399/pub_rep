import React, { useEffect, useState, memo } from "react";
import { getBlogData } from "@src/actions/general-actions";
import PageLayout from "@page-components/page-layout";
import css from "./index.module.scss";
import BlogSidebar from "./blog-sidebar";
import A from "@styleguide/components/a";
import Img from "@styleguide/components/img";
import { useRouter } from "next/router";

export default function BlogPage({ name }) {
  const router = useRouter();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    sideContent: "",
    category: "",
    readTime: "",
    published: "",
    blog_bgImg: "",
    blog_contentImg1: "",
    blog_contentImg2: "",
    authorImg: "",
    author: "",
    authorQuote: "",
    authorFacebook: "",
    authorInsta: "",
    authorLinkedIn: ""
  });
  useEffect(() => {
    name !== undefined ? getBlogData(name).then(res => setBlogData(res)) : "";
  }, [name]);
  useEffect(() => {
    const facebookScript = document.createElement("script");
    facebookScript.async = true;
    facebookScript.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=${process.env.FACEBOOK_APP_ID}&autoLogAppEvents=1`;
    document.body.appendChild(facebookScript);
  }, []);
  return (
    <PageLayout>
      <>
        <div id="fb-root"></div>
        {blogData && (
          <div className={css.blogContainer}>
            <section className={css.blogBodyLeft}>
              <h1>{blogData.title}</h1>
              <h2>
                By<span> {blogData.author}</span> |{" "}
                {blogData.published
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}{" "}
                | <span>{blogData.category}</span> | {blogData.readTime} mins
              </h2>
              <img
                className={css.blogImage}
                src={blogData.blog_bgImg}
                alt={blogData.category}
              />
              <p dangerouslySetInnerHTML={{ __html: blogData.content }}></p>
              <div className={css.blogImageContainer}>
                <img src={blogData.blog_contentImg1} alt={blogData.category} />
                <img src={blogData.blog_contentImg2} alt={blogData.category} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: blogData.sideContent }}></p>

              <div className={css.blogAuthorLinks}>
                <a href={blogData.authorFacebook}>
                  <Img
                    alt={"Facebook"}
                    src={"FB (1).svg"}
                    className={css.authorSocialIcons}
                  />
                </a>
                <Img
                  alt={"LinkedIn"}
                  src={"LD.svg"}
                  className={css.authorSocialIcons}
                />
                <Img
                  alt={"Instagram"}
                  src={"IG.svg"}
                  className={css.authorSocialIcons}
                />
              </div>
              <div className={css.blogAuthorDescriptionContainer}>
                <img src={blogData.authorImg} alt="author" />
                <div className={css.blogAuthorDescription}>
                  <h2>{blogData.author}</h2>
                  <p>{blogData.authorQuote}</p>
                </div>
              </div>
              <div
                className="fb-comments"
                data-href={`http://localhost:8080${router.asPath}`}
                data-numposts="10"
                data-width="100%"
              ></div>
            </section>
            <section className={css.blogBodyRight}>
              <BlogSidebar />
            </section>
          </div>
        )}
      </>
    </PageLayout>
  );
}
