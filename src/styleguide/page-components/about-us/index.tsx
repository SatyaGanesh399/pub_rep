import React from "react";
import PageLayout from "@page-components/page-layout";
import Img from "@styleguide/components/img";
import AboutUsVisionClipart from "@svg-resources/about-us-vision-clipart";
import AboutUsValuesClipart from "@svg-resources/about-us-values-clipart";
import { IconUser } from "@icons/index";
import Slider from "@src/styleguide/components/slider";
import { SLIDER_ABOUTUS_DATA } from "@lib/staticData";

import css from "./index.module.scss";

const AboutUs = () => {
  return (
    <PageLayout>
      <>
        <div className={css.background}>
          <h1 className={css.backgroundHeading}>About Us</h1>
          <p className={css.backgroundParagraph}>
            Here is the little information about who we are
          </p>
        </div>
        <div className={css.contentContainer}>
          <div className={css.ourVision}>
            <h2 className={css.ourVisionHeading}>What Are We Doing This?</h2>
            <div className={css.ourVisionContent}>
              <div>
                <p>
                  The mental health status of our country is in shambles, over
                  70% of the population suffers from Depression once in their
                  lifetime. Time spent in research and on field tells us one of
                  the major cause of a depressive episode is dissatisfaction in
                  career, lack of professional success and stress burnout.
                </p>
                <p>
                  We, at Pro Garten believe that our mental health and
                  professional satisfaction would improve if we pursue a career
                  in accordance to our potential, ability and personality. We
                  want to make sure that the school going generation gets deep
                  insights into their capabilities.
                </p>
              </div>
              <div>
                <AboutUsVisionClipart />
              </div>
            </div>
          </div>
          <div className={css.ourValues}>
            <h2 className={css.ourValuesHeading}>What Do We Value?</h2>
            <div className={css.ourValuesContent}>
              <div>
                <AboutUsValuesClipart />
              </div>
              <div>
                <p>
                  Providing the guidance needed to be known to understand the
                  underlying potential. We do not partner with colleges. We
                  understand that the adolescence brings about the confusion of
                  what to pursue, our belief is in assisting you with profound
                  decisions around your professional life.
                </p>
              </div>
            </div>
          </div>
          <div className={css.meetOurTeam}>
            <h2 className={css.meetOurTeamHeading}>Meet Our Team</h2>

            <Slider
              slidesLength={SLIDER_ABOUTUS_DATA.length - 1}
              sliderName="aboutus"
              containerStyles={css.meetOurTeamContents}
              arrowContainerStyle={css.aboutusArrowPosition}
              slideWidth={300}
              sliderWindowWidth={350 * SLIDER_ABOUTUS_DATA.length}
            >
              {SLIDER_ABOUTUS_DATA.map((slide, i) => (
                <div
                  key={`aboutus-slide-${i}`}
                  className={css.meetOurTeamContent}
                >
                  {slide.imageURl.length === 0 ? (
                    <IconUser
                      className={css.teamProfilePic}
                      size={"9x"}
                      width="0"
                    />
                  ) : (
                    <Img
                      className={css.teamProfilePic}
                      src={slide.imageURl}
                      alt={slide.heading}
                    />
                  )}
                  <div className={css.team}>
                    <h3 className={css.teamTitle}>{slide.heading}</h3>
                    <div className={css.teamSubTitle}>{slide.postion}</div>
                    <p className={css.teamDescription}>{slide.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default AboutUs;
