import React, { useState, useContext } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import {
  AuthorizationContext,
  CLEAR_STATE
} from "@context/authorization-context";
import { links } from "../../../types/links";
import Img from "@styleguide/components/img";
import A from "@styleguide/components/a";
import Button from "@styleguide/components/button";
import LinkTabs from "@styleguide/components/link-tabs";
import InstituteClipart from "@svg-resources/institute-clipart";
import StudentClipart from "@svg-resources/student-clipart";
import CareerVideoClipart from "@src/styleguide/svg-resources/career-video-clipart";
import CareerGuideClipart from "@src/styleguide/svg-resources/career-guide-clipart";
import { IconMenu } from "@icons/index";
import CareerBlogClipart from "@src/styleguide/svg-resources/career-blog-clipart";
import HeaderMenu from "./header-menu";
import HeaderModal from "./header-modal";
import { Toaster } from "react-hot-toast";

import css from "./index.module.scss";

import {
  HEADER_EVENTS,
  FOOTER_CONTACTUS,
  HEADER_CAREER_BLOGS,
  HEADER_CAREER_GUIDE,
  HEADER_CAREER_VIDEOS,
  HEADER_STUDENTS,
  HEADER_INSTITUTION
} from "@lib/staticRoutes";

import {
  HEADER_EVENTS_TITLE,
  HEADER_CAREER_TITLE,
  HEADER_SERVICES_TITLE,
  HEADER_SERVICES_STUDENTS_TITLE,
  HEADER_SERVICES_INSTITUTION_TITLE,
  HEADER_CAREER_GUIDE_TITLE,
  HEADER_CAREER_BLOGS_TITLE,
  HEADER_CAREER_VIDEOS_TITLE
} from "@lib/constants";

type HeaderProps = {
  headerStyle?: string;
};

const headerTabs: links[] = [
  {
    linkName: HEADER_SERVICES_TITLE,
    linkVal: FOOTER_CONTACTUS,
    linkSubMenu: true,
    linkSubMenuData: [
      {
        linkName: HEADER_SERVICES_STUDENTS_TITLE,
        linkVal: HEADER_STUDENTS,
        linkIcon: <StudentClipart className={css.mobileNavbarIcon} />
      },
      {
        linkName: HEADER_SERVICES_INSTITUTION_TITLE,
        linkVal: HEADER_INSTITUTION,
        linkIcon: <InstituteClipart className={css.mobileNavbarIcon} />
      }
    ],
    linkIcon: (
      <Img
        alt={"Menu Services"}
        src={"menu_services.svg"}
        className={css.mobileNavbarIcon}
      />
    )
  },
  {
    linkName: HEADER_CAREER_TITLE,
    linkVal: FOOTER_CONTACTUS,
    linkSubMenu: true,
    linkSubMenuData: [
      {
        linkName: HEADER_CAREER_GUIDE_TITLE,
        linkVal: HEADER_CAREER_GUIDE,
        linkIcon: <CareerGuideClipart className={css.mobileNavbarIcon} />
      },
      {
        linkName: HEADER_CAREER_BLOGS_TITLE,
        linkVal: HEADER_CAREER_BLOGS,
        linkIcon: <CareerBlogClipart className={css.mobileNavbarIcon} />
      },
      {
        linkName: HEADER_CAREER_VIDEOS_TITLE,
        linkVal: HEADER_CAREER_VIDEOS,
        linkIcon: <CareerVideoClipart className={css.mobileNavbarIcon} />
      }
    ],
    linkIcon: (
      <Img
        alt={"Menu Career"}
        src={"menu_career.svg"}
        className={css.mobileNavbarIcon}
      />
    )
  },
  {
    linkName: HEADER_EVENTS_TITLE,
    linkVal: HEADER_EVENTS,
    linkIcon: (
      <Img
        alt={"Menu Services"}
        src={"menu_events.svg"}
        className={css.mobileNavbarIcon}
      />
    )
  }
];

const Header = (props: HeaderProps) => {
  const { headerStyle } = props;
  const Router = useRouter();
  const { loggedInUser, dispatch, signOutUserAction } = useContext(
    AuthorizationContext
  );
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <>
    <Toaster />
      <HeaderMenu
        isMenuOpen={isMenuVisible}
        onMenuClose={() => setMenuVisibility(false)}
        onModalOpen={() => setModalVisibility(true)}
        tabs={headerTabs}
      />
      <HeaderModal
        forChangePassword={false}
        isModalOpen={isModalVisible}
        onModalClose={() => setModalVisibility(false)}
      />
      <div className={classNames(headerStyle, css.headerContainer)}>
        <IconMenu
          className={css.headerMenuIcon}
          size={"2x"}
          onClick={() => setMenuVisibility(true)}
          width="0"
        />
        {/* <button className={css.headerMenuIcon} onClick={() => setMenuVisibility(true)}>Menu</button> */}
        <A link={loggedInUser.name === "" ? "/" : "/dashboard"} internal={true}>
          <Img className={css.headerLogo} src={"logo.png"} alt="logo" />
        </A>
        <div className={css.navbar}>
          <LinkTabs
            tabs={headerTabs}
            tabsStyle={css.navbarTabs}
            type="header"
          />
          {loggedInUser.name === "" ? (
            <Button
              type="submit"
              className={css.navbarBtn}
              onClick={() => setModalVisibility(true)}
            >
              Sign In
            </Button>
          ) : (
            <Button
              type="submit"
              className={css.navbarBtn}
              onClick={() => {
                signOutUserAction();
                Router.push("/");
                dispatch({
                  type: CLEAR_STATE,
                  state: {}
                });
              }}
            >
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
