import React from "react";
import css from "./index.module.scss";
import Router from "next/router";
import BlogCategory from "./blog-category";
import A from "@styleguide/components/a";
import Img from "@styleguide/components/img";
export default function blogSidebar() {
  return (
    <>
      <input type="text" placeholder="Search" className={css.blogSearch} />
      <div className={css.blogCategoryList}>
        <div className={css.blogBar}></div>
        <h1>Category</h1>
        <h2
          onClick={() => {
            Router.push({
              pathname: "/blogs",
              query: { name: "music" }
            });
          }}
        >
          Business
        </h2>
        <h2>Finance</h2>
        <h2>Immovables</h2>
        <h2>Tech</h2>
        <h2>Art</h2>
        <h2>Skill</h2>
        <h2>Inspiration</h2>
      </div>
      <BlogCategory />
      <div className={css.blogCustomerService}>
        <div className={css.blogBar}></div>
        <p>Are you confused?</p>
        <h2>Talk To Our Counsellor</h2>
        <A link="/contact" internal={true}>
          {" "}
          <button className={css.customerContact}>Contact us</button>{" "}
        </A>
        <Img
          alt={"Menu Services"}
          src={"contactUs.svg"}
          className={css.contactUsIcon}
        />
      </div>
    </>
  );
}
