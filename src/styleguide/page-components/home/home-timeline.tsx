import React, { useState, useEffect } from "react";
import HomeAssessmentClipart from "@svg-resources/home-assessment-clipart";
import HomeCarrerClipart from "@svg-resources/home-career-clipart";
import HomeIndustryClipart from "@svg-resources/home-industry-clipart";
import HomeSupportClipart from "@svg-resources/home-support-clipart";
import HomeBootcampClipart from "@svg-resources/home-bootcamp-clipart";
import { HOME_TIMELINE_DATA } from "@lib/staticData";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import css from "./timeline.module.scss";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

const MobileTimelineContent = ({ index }) => {
  return (
    <>
      <div className={css.mobileTimelineEntryTitle}>
        {`${HOME_TIMELINE_DATA[index].title}`}
      </div>
      <p className={css.mobileTimelineEntryDetail}>
        {`${HOME_TIMELINE_DATA[index].text}`}
      </p>
    </>
  );
};

const MobileTimelineClipart = ({ index, className }) => {
  switch (index) {
    case 0:
      return <HomeAssessmentClipart className={className} />;
    case 1:
      return <HomeCarrerClipart className={className} />;
    case 2:
      return <HomeIndustryClipart className={className} />;
    case 3:
      return <HomeSupportClipart className={className} />;
    case 4:
      return <HomeBootcampClipart className={className} />;
  }
};

const HomeTimelineSection = () => {
  const [index, setIndex] = useState(0);
  var timeout = setTimeout(function() {
    if (index === 4) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 4000);

  return (
    <div className={css.timelineContainer} id="timeline">
      <div className={css.timelineHeading}>How Do We Help You?</div>
      <div className={css.timeline}>
        <FadeInWhenVisible>
          <div className={css.timelineClipartContainer}>
            <MobileTimelineClipart index={0} className={css.timelineClipart} />
          </div>
        </FadeInWhenVisible>

        <dl className={css.timelineEntry}>
          <FadeInWhenVisible>
            <dt
              className={css.timelineEntryTitle}
            >{`${HOME_TIMELINE_DATA[0].title}`}</dt>
            <dd className={css.timelineEntryDetail}>
              {`${HOME_TIMELINE_DATA[0].text}`}
            </dd>
          </FadeInWhenVisible>
        </dl>

        <dl className={css.timelineEntry}>
          <FadeInWhenVisible>
            <dt
              className={css.timelineEntryTitle}
            >{`${HOME_TIMELINE_DATA[1].title}`}</dt>
            <dd className={css.timelineEntryDetail}>
              {`${HOME_TIMELINE_DATA[1].text}`}
            </dd>
          </FadeInWhenVisible>
        </dl>

        <FadeInWhenVisible>
          <div className={css.timelineClipartContainer}>
            <MobileTimelineClipart index={1} className={css.timelineClipart} />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className={css.timelineClipartContainer}>
            <MobileTimelineClipart index={2} className={css.timelineClipart} />
          </div>
        </FadeInWhenVisible>

        <dl className={css.timelineEntry}>
          <FadeInWhenVisible>
            <dt
              className={css.timelineEntryTitle}
            >{`${HOME_TIMELINE_DATA[2].title}`}</dt>
            <dd className={css.timelineEntryDetail}>
              {`${HOME_TIMELINE_DATA[2].text}`}
            </dd>
          </FadeInWhenVisible>
        </dl>
        <dl className={css.timelineEntry}>
          <FadeInWhenVisible>
            <dt
              className={css.timelineEntryTitle}
            >{`${HOME_TIMELINE_DATA[3].title}`}</dt>
            <dd className={css.timelineEntryDetail}>
              {`${HOME_TIMELINE_DATA[3].text}`}
            </dd>
          </FadeInWhenVisible>
        </dl>

        <FadeInWhenVisible>
          <div className={css.timelineClipartContainer}>
            <MobileTimelineClipart index={3} className={css.timelineClipart} />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className={css.timelineClipartContainer}>
            <MobileTimelineClipart index={4} className={css.timelineClipart} />
          </div>
        </FadeInWhenVisible>

        <dl className={css.timelineEntry}>
          <FadeInWhenVisible>
            <dt className={css.timelineEntryTitle}>
              {`${HOME_TIMELINE_DATA[4].title}`}
            </dt>
            <dd className={css.timelineEntryDetail}>
              {`${HOME_TIMELINE_DATA[4].text}`}
            </dd>
          </FadeInWhenVisible>
        </dl>
      </div>
      <div className={css.mobileTimeline}>
        <div className={css.mobileTimelineBar}>
          <div
            className={index === 0 ? css.activeBar : ""}
            onClick={() => {
              clearTimeout(timeout);
              setIndex(0);
            }}
          >
            {`${HOME_TIMELINE_DATA[0].key}`}
          </div>
          <div
            className={index === 1 ? css.activeBar : ""}
            onClick={() => {
              clearTimeout(timeout);
              setIndex(1);
            }}
          >
            {`${HOME_TIMELINE_DATA[1].key}`}
          </div>
          <div
            className={index === 2 ? css.activeBar : ""}
            onClick={() => {
              clearTimeout(timeout);
              setIndex(2);
            }}
          >
            {`${HOME_TIMELINE_DATA[2].key}`}
          </div>
          <div
            className={index === 3 ? css.activeBar : ""}
            onClick={() => {
              clearTimeout(timeout);
              setIndex(3);
            }}
          >
            {`${HOME_TIMELINE_DATA[3].key}`}
          </div>
          <div
            className={index === 4 ? css.activeBar : ""}
            onClick={() => {
              clearTimeout(timeout);
              setIndex(4);
            }}
          >
            {`${HOME_TIMELINE_DATA[4].key}`}
          </div>
        </div>

        <FadeInWhenVisible>
          <MobileTimelineClipart
            index={index}
            className={css.mobileTimelineClipart}
          />
          <MobileTimelineContent index={index} />
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default HomeTimelineSection;
