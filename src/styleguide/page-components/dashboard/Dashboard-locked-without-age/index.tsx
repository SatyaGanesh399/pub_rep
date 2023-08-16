import React from "react";
import Button from "@styleguide/components/button";
import DashboardLockedClipart from "@svg-resources/dashboard-locked-clipart";
import { HEADER_STUDENTS } from "@lib/staticRoutes";
import A from "@styleguide/components/a";
import css from "./index.module.scss";

const DashboardAgeLocked = () => {
  const handleProfileSectionNavigation = () => {
    return location.reload();
  }
  return (
    <div className={css.lockedContainer}>
      <DashboardLockedClipart className={css.lockedClipart} />
      <p className={css.lockedText}>Kindly complete the profile to continue</p>
        <Button className={css.lockedBtn} onClick={handleProfileSectionNavigation}>Go to profile</Button>
    </div>
  );
};

export default DashboardAgeLocked;
