import React, { useState, forwardRef, useImperativeHandle, useContext } from "react";
import { AuthorizationContext } from "@context/authorization-context";
import classNames from "classnames";

import css from "./index.module.scss";

import { DASHBOARD_SIDEBAR_DATA } from "@lib/staticData";

import {
  IconDown,
  IconUp,
  IconSideBarProfile,
  IconSideBarIntro,
  IconSideBarVerbal,
  IconSideBarInterest,
  IconSideBarWork,
  IconSideBarPersonality,
  IconSideBarEmotional,
  IconSideBarReport,
  IconSideBarSession,
  IconSideBarCareer,
  IconLock,
  IconLockOpen
} from "@icons/index";
import { boolean } from "yup";

type DashboardSidebarProps = {
  onMenuToggle: Function;
};

type MenuItemProp = {
  name: string;
  displayName: string;
  premiumCheck: boolean;
  decodeCheck?: boolean;
  type: string;
  subMenu?: boolean;
  menuItems?: MenuItemProp[];
};

const SvgSelector = ({ type }) => {
  switch (type) {
    case "profile":
      return (
        <IconSideBarProfile
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "intro":
      return (
        <IconSideBarIntro className={css.dashboardSideBtnClipArt} size={"2x"} />
      );
    case "verbal":
      return (
        <IconSideBarVerbal
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "interest":
      return (
        <IconSideBarInterest
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "work":
      return (
        <IconSideBarWork className={css.dashboardSideBtnClipArt} size={"2x"} />
      );
    case "personality":
      return (
        <IconSideBarPersonality
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "emotional":
      return (
        <IconSideBarEmotional
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "report":
      return (
        <IconSideBarReport
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "session":
      return (
        <IconSideBarSession
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );
    case "career":
      return (
        <IconSideBarCareer
          className={css.dashboardSideBtnClipArt}
          size={"2x"}
        />
      );

    default:
      return null;
  }
};

const DashboardSidebar = forwardRef(
  ({ onMenuToggle }: DashboardSidebarProps, ref) => {
    const { loggedInUser } = useContext(AuthorizationContext);
    const [activeMenuIndex, setActiveMenuIndex] = useState(0);
    const [activeSubIndex, setActiveSubIndex] = useState(0);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      useRefMenuToggle(index: number, item: MenuItemProp) {
        setActiveMenuIndex(index);
        setActiveSubIndex(0);
        item.subMenu ? setSubMenuOpen(true) : setSubMenuOpen(false);
        onMenuToggle(item.type, item.displayName, item.premiumCheck, item.decodeCheck);
      },
      useRefMenuSubToggle(index: number, item: MenuItemProp) {
        setActiveSubIndex(index);
        onMenuToggle(item.type, item.displayName, item.premiumCheck, item.decodeCheck);
      }
    }));

    const handleMenuToggle = (index: number, item: MenuItemProp) => {
      setActiveMenuIndex(index);
      setActiveSubIndex(0);
      item.subMenu ? setSubMenuOpen(true) : setSubMenuOpen(false);
      onMenuToggle(item.type, item.displayName, item.premiumCheck, item.decodeCheck);
    };

    const handleMenuSubToggle = (index: number, item: MenuItemProp) => {
      setActiveSubIndex(index);
      onMenuToggle(item.type, item.displayName, item.premiumCheck, item.decodeCheck);
    };


    return (
      <div className={css.dashboardSideBar}>
        {DASHBOARD_SIDEBAR_DATA.map((item, i) => (
          <div key={`dash_btn_${i}`} className={css.dashboardSideBtnContainer}>
            <div
              id={`${item.type}`}
              className={classNames(
                css.dashboardSideBtn,
                activeMenuIndex === i ? css.activeDashboardSideBtn : ""
              )}
              onClick={() => handleMenuToggle(i, item)}
            >
              <SvgSelector type={item.type} />
              <span className={css.dashboardSideBtnText}>{item.name}</span>
              {
              loggedInUser.package == "none" || loggedInUser.package == null || !loggedInUser.package || loggedInUser.package == undefined  ? (item.name == "Profile") ? <IconLockOpen className={classNames(css.iconlock, css.lockOpen)} /> : <IconLock className={classNames(css.iconlock, css.lockClose)} />
              : loggedInUser.package == "basic" ? (item.name == "Profile" || item.name == "Beta" || item.name == "Introduction" || item.name == "Career Bank") ? <IconLockOpen className={classNames(css.iconlock, css.lockOpen)} /> : <IconLock className={classNames(css.iconlock, css.lockClose)} />
              : <IconLockOpen className={classNames(css.iconlock, css.lockOpen)} />
              }
              {loggedInUser.package !== "none" && item.subMenu ? (
                isSubMenuOpen ? (
                  <IconUp
                    width="0"
                    className={classNames(
                      css.dashboardSubArrow,
                      activeMenuIndex === i ? css.dashboardSubArrowActive : ""
                    )}
                  />
                ) : (
                  <IconDown
                    width="0"
                    className={classNames(
                      css.dashboardSubArrow,
                      activeMenuIndex === i ? css.dashboardSubArrowActive : ""
                    )}
                  />
                )
              ) : (
                ""
              )}
            </div>
            {loggedInUser.package !== "none" && item.subMenu ? (
              <div
                className={
                  isSubMenuOpen
                    ? css.dashboardSideSubMenuActive
                    : css.dashboardSideSubMenu
                }
              >
                {item.menuItems.map((submenu, e) => (
                  <button
                    key={`dash_sub_btn_${e}`}
                    className={classNames(
                      css.dashboardSideSubBtn,
                      activeSubIndex === e ? css.activeDashboardSideSubBtn : ""
                    )}
                    onClick={() => handleMenuSubToggle(e, submenu)}
                  >
                    {submenu.name}
                  </button>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
);

DashboardSidebar.displayName = "DashboardSidebar";

export default DashboardSidebar;
