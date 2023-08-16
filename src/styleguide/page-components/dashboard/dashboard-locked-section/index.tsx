import React from "react";
import Button from "@styleguide/components/button";
import DashboardLockedClipart from "@svg-resources/dashboard-locked-clipart";
import { HEADER_STUDENTS } from "@lib/staticRoutes";
import A from "@styleguide/components/a";
import css from "./index.module.scss";

const DashboardLockedSection = () => {
  return (
    <div className={css.lockedContainer}>
      <DashboardLockedClipart className={css.lockedClipart} />
      <p className={css.lockedText}>Oops, the assessment is locked !</p>
      <A internal link={`${HEADER_STUDENTS}/#packages`}>
        <Button className={css.lockedBtn}>Buy Package</Button>
      </A>
    </div>
  );
};

export default DashboardLockedSection;
