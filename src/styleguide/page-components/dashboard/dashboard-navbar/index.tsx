import React, { useState } from "react";
import classNames from "classnames";
import Button from "@styleguide/components/button";

import css from "./index.module.scss";

import { DASHBOARD_MOBILE_SIDEBAR_DATA } from "@lib/staticData";

type DashboardMobileNavbarProps = {
  onMenuToggle: Function;
};

const DashboardMobileNavbar = ({
  onMenuToggle
}: DashboardMobileNavbarProps) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  return (
    <div className={css.dashboardMobileNavBar}>
      {DASHBOARD_MOBILE_SIDEBAR_DATA.map((item, i) => (
        <Button
          key={`dash_mobile_btn_${i}`}
          className={classNames(
            css.dashboardMobileSideBtn,
            activeMenuIndex === i ? css.activeDashboardMobileSideBtn : ""
          )}
          onClick={() => {
            setActiveMenuIndex(i);
            onMenuToggle(item.type, item.displayName, item.premiumCheck);
          }}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default DashboardMobileNavbar;
