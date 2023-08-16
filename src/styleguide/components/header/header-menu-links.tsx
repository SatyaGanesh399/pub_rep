import React, { useState } from "react";
import Link from "next/link";
import { links } from "../../../types/links";

import css from "./index.module.scss";

import { IconDown } from "@icons/index";

type HeaderMenuLinksProps = {
  tabs: links[];
};

const HeaderMenuLinks = ({ tabs }: HeaderMenuLinksProps) => {
  const [isDropDownVisible, setDropDownVisibility] = useState(false);
  return (
    <>
      {tabs.map((item, index) => {
        return item.linkSubMenu ? (
          <div
            key={`mobile-header-tab-${index}`}
            className={css.mobileNavbarTab1}
          >
            <div
              className={css.mobileNavbarTab2}
              onClick={() => setDropDownVisibility(!isDropDownVisible)}
            >
              {item.linkIcon}
              <a className={css.mobileNavbarTabs}>{item.linkName}</a>
              <IconDown className={css.mobileNavbarDropIcon} width="0" />
            </div>
            {isDropDownVisible &&
              item.linkSubMenuData.map((submenu, i) => (
                <Link href={submenu.linkVal} key={`mobile-header-sub-tab-${i}`}>
                  <div className={css.mobileNavbarTab3}>
                    {submenu.linkIcon}
                    <span className={css.mobileNavbarTabs}>{submenu.linkName}</span>
                  </div>
                </Link>
              ))}
          </div>
        ) : (
          <Link href={item.linkVal} key={`mobile-header-tab-${index}`}>
            <div className={css.mobileNavbarTab}>
              {item.linkIcon}
              <span className={css.mobileNavbarTabs}>{item.linkName}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default HeaderMenuLinks;
