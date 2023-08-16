import React from "react";
import Link from "next/link";
import Button from "@styleguide/components/button";
import DashboardCareerClipart from "@svg-resources/dashboard-career-clipart";

import { HEADER_CAREER_GUIDE } from "@lib/staticRoutes";

import css from "./index.module.scss";

const DashboardCareerSection = () => {
  return (
    <div className={css.careerContainer}>
      <DashboardCareerClipart className={css.careerClipart} />
      <p className={css.careerText}>Check exciting information on Careers</p>
      <Link href={HEADER_CAREER_GUIDE}>
        <Button className={css.careerBtn}>Read Now</Button>
      </Link>
    </div>
  );
};

export default DashboardCareerSection;
