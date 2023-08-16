import React from "react";
import Link from "next/link";
import classNames from "classnames";
import StudentClipart from "@svg-resources/student-clipart";
import InstituteClipart from "@svg-resources/institute-clipart";

import css from "./index.module.scss";

import { HEADER_STUDENTS, HEADER_INSTITUTION } from "@lib/staticRoutes";

const HomeInfoSection = () => (
  <>
    <div className={css.infoSectionHeading} id="services">
      Our Services
    </div>
    <div className={css.infoContainer}>
      <div className={css.infoContent}>
        <div className={css.infoSection}>
          <div className={css.infoHeading}>Are you a Student?</div>
          <StudentClipart className={css.infoClipartStudent} />
          <div className={css.infoText}>
            Careers galore, but which one to choose? Take the test to know what
            you’re made for and start your journey to career exploration here.
          </div>
          <Link href={HEADER_STUDENTS}>
            <span className={css.infoBtn}>Know More</span>
          </Link>
        </div>
        <div className={css.infoSection}>
          <div className={css.infoHeading}>Are you an Institution?</div>
          <InstituteClipart className={css.infoClipartInstitute} />
          <div className={classNames(css.infoText, css.infoText2)}>
            Want to take your institute to the next level? Become a Pro Garten
            partner or get a tailor made program, especially for you.
          </div>
          <Link href={HEADER_INSTITUTION}>
            <span className={css.infoBtn}>Know More</span>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default HomeInfoSection;
