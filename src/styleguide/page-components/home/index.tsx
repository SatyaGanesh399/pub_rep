import React from "react";
import PageLayout from "@page-components/page-layout";
import HomeHero from "./home-hero";
import HomeBlogSection from "./home-blog-section";
import HomeInfoSection from "./home-info-section";
import HomeTimelineSection from "./home-timeline";
import HomeMediaSection from "./home-media-section";
import HomeTestimonialsSection from "./home-testimonials-section";
import HomeVideosSection from "./home-videos-section";

const Home = () => (
  <PageLayout>
    <>
      
      <HomeHero />
      <HomeTimelineSection />
      <HomeInfoSection />
      {/* <HomeMediaSection /> */}
      <HomeTestimonialsSection />
      {/* <HomeBlogSection /> */}
      {/* <HomeVideosSection /> */}
    </>
  </PageLayout>
);

export default Home;
