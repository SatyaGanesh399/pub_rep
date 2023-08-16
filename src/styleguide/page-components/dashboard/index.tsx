import React, { useState, useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import {
  AuthorizationContext,
  CLEAR_STATE
} from "@context/authorization-context";
import PageLayout from "@page-components/page-layout";
import { useOnClickOutside } from "@styleguide/hooks/on-click-outside";
import Button from "@styleguide/components/button";

import DashbaordAssessmentIntroSection from "./dashboard-assessment-intro-section";
import DashboardMobileProfileSection from "./dashboard-profile-mobile-bar";
import DashboardInstructionsSection from "./dashboard-instructions-section";
import DashboardSubmittedSection from "./dashboard-submitted-section";
import DashbaordPersonalSection from "./dashboard-personal-section";
import DashboardSessionSection from "./dashboard-session-section";
import DashboardLockedSection from "./dashboard-locked-section";
import DashboardReportSection from "./dashboard-report-section";
import DashboardCareerSection from "./dashboard-career-section";
import DashboardProfileSection from "./dashboard-profile-bar";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardNavbar from "./dashboard-navbar";
import DashboardGuide from "./dashboard-guide";
import DashboardAgeLocked from './Dashboard-locked-without-age';

import { IconFilledDown, IconSignOut, IconPassword } from "@icons/index";

import css from "./index.module.scss";

import { DASHBOARD_SIDEBAR_DATA } from "@lib/staticData";

import {
  ASSESSMENT_MA,
  ASSESSMENT_CA,
  ASSESSMENT_CL,
  ASSESSMENT_EMOTIONAL,
  ASSESSMENT_INTEREST,
  ASSESSMENT_PERSONALITY,
  ASSESSMENT_NA,
  ASSESSMENT_RA,
  ASSESSMENT_SA,
  ASSESSMENT_VA,
  ASSESSMENT_WORK,
  ASSESSMENT_INTEREST_B
} from "@lib/aptitudeData";

type DashboardContentSelectorProps = {
  plan : string,
  pageLoad : string,
  menuType: string;
  age : number;
  setNextTest: Function;
  checkIsInterestTest : Function;
};

const DashboardContentSelector = ({
  plan,
  pageLoad,
  menuType,
  age,
  setNextTest,
  checkIsInterestTest
}: DashboardContentSelectorProps) => {
  switch (menuType) {
    case "profile":
      return <DashbaordPersonalSection />;
    case "intro":
      return (
        <DashbaordAssessmentIntroSection
          setNextTest={() => setNextTest(true)}
          checkIsInterestTest={checkIsInterestTest}
        />
      );
    case "verbal":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_VA}
          testTime={[0, 7, 30]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="__P9bEFM8lM"
        />
      );
    case "spatial":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_SA}
          testTime={[0, 6, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="DhpuOKbdHGU"
        />
      );
    case "closure":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_CA}
          testTime={[0, 5, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="kZOXnXz5tE0"
        />
      );
    case "clerical":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_CL}
          testTime={[0, 3, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="gmiHdKBRAIg"
        />
      );
    case "numerical":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_NA}
          testTime={[0, 5, 30]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="Gbbda7IC238"
        />
      );
    case "reasoning":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_RA}
          testTime={[0, 5, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="N_Sac9UrmYY"
        />
      );
    case "mechanical":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_MA}
          testTime={[0, 9, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="fL2AVAu9XCA"
        />
      );
    case "personality":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_PERSONALITY}
          testTime={[2, 0, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="NN5_ItvLbx8"
        />
      );
    case "interest":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={age < 16 ?  ASSESSMENT_INTEREST : ASSESSMENT_INTEREST_B}
          testTime={[2, 0, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="EwNwmJm_KyU"
        />
      );
    case "work":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_WORK}
          testTime={[2, 0, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="Jr3xkcqmqu0"
        />
      );
    case "emotional":
      return (
        <DashboardInstructionsSection
          menuType={menuType}
          data={ASSESSMENT_EMOTIONAL}
          testTime={[2, 0, 0]}
          setNextTest={setNextTest}
          checkIsInterestTest={checkIsInterestTest}
          videoID="pIxbgWWb4NA"
        />
      );
    case "mobileassessment":
      return (
        <div className={css.mobileAssessmentText}>
          Please switch to a laptop or a PC to access the Assessment section.
        </div>
      );
    case "session":
      return <DashboardSessionSection />;
    case "locked":
      return <DashboardLockedSection />;
    case "submitted":
      return <DashboardSubmittedSection plan={plan} pageLoad={pageLoad} setNextTest={setNextTest} />;
    case "report":
      return <DashboardReportSection />;
    case "career":
      return <DashboardCareerSection />;
    case "agelock":
      return <DashboardAgeLocked />;
    default:
      return null;
  }
};

const Dashboard = () => {
  const userMenuRef = useRef();
  const sideBarRef = useRef();
  const Router = useRouter();
  const { loggedInUser, signOutUserAction, dispatch } = useContext(
    AuthorizationContext
  );
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNextTest, setNextTest] = useState(false);
  const [isInterestTest, setIsInterestTest] = useState(false);
  useOnClickOutside(userMenuRef, () => setUserMenuOpen(false));
  const [activeMenu, setActiveMenu] = useState({
    type: "profile",
    displayName: "Profile"
  });

  useEffect(() => {
    if (isNextTest) {
      let menuItem = {
        name: "Profile",
        displayName: "Profile",
        type: "profile",
        decodeCheck : true,
        premiumCheck: false
      };
      let subMenu = false;
      let menuIndex = -1;
      if (isInterestTest) {
        menuItem = {
            name: "Beta",
            displayName: "Interest",
            type: "interest",
            decodeCheck : true,
            premiumCheck: true
        };
        menuIndex = 3;
      }else if(loggedInUser.journey.includes("interest") && isInterestTest){
        menuItem = {
          name: "Beta",
          displayName: "Interest",
          type: "interest",
          decodeCheck : true,
          premiumCheck: true
      };
      menuIndex = 3;
      } else {
      DASHBOARD_SIDEBAR_DATA.every((item, i) => {
        if (item.subMenu) {
          item.menuItems.every((subitem, e) => {
            if (!loggedInUser.journey.includes(subitem.type)) {
              menuItem = subitem;
              subMenu = true;
              menuIndex = e;
              return false;
            }
            return true;
          });
          if (menuIndex !== -1) {
            return false;
          }
        } else {
          if (
            !loggedInUser.journey.includes(item.type) &&
            item.type !== "profile" &&
            item.type !== "intro"
          ) {
            menuItem = item;
            subMenu = false;
            menuIndex = i;
            return false;
          }
        }
        return true;
      });
    }
      const sideBarRefNode = sideBarRef.current as any;
      if (sideBarRefNode !== undefined) {
        subMenu
          ? sideBarRefNode.useRefMenuSubToggle(menuIndex, menuItem)
          : sideBarRefNode.useRefMenuToggle(menuIndex, menuItem);
      }
    }
    setNextTest(false);
    setIsInterestTest(false);
  }, [isNextTest, loggedInUser]);


  return (
    <PageLayout hideFooter={true} hideHeaderDesktop={true}>
      <div className={css.mainContainer}>
        <Toaster />
        <div className={css.sideBarContainer}>
          <DashboardProfileSection />
          <DashboardSidebar
            ref={sideBarRef}
            onMenuToggle={(type, displayName, premiumCheck, decodeCheck) =>{
              if(type != "profile" && (!loggedInUser.age || !loggedInUser.dateofbirth)){
                setActiveMenu({type : "agelock" , displayName : displayName})
              }else{
                setActiveMenu(
                loggedInUser.package && loggedInUser.package === "basic"
                  ? decodeCheck
                    ? loggedInUser.journey.includes(type)
                      ? { type: "submitted", displayName: displayName }
                      : { type: type, displayName: displayName }
                    : { type: "locked", displayName: displayName }
                  : loggedInUser.package === "intermediate" || loggedInUser.package === "advanced"
                  ? loggedInUser.journey.includes(type)
                    ? { type: "submitted", displayName: displayName }
                    : { type: type, displayName: displayName }
                  : premiumCheck
                  ? { type: "locked", displayName: displayName }
                  : { type: type, displayName: displayName }
              );
              }
            }
            }
          />
        </div>
        <div className={css.mobileDashboardHeader}>
          <span className={css.mobileDashboardHeading}>My Dashboard</span>
          <div className={css.mobileProfileBar}>
            <div className={css.mobileProfileBarContainer}>
              <DashboardMobileProfileSection />
            </div>
          </div>
        </div>
        <DashboardNavbar
          onMenuToggle={(type, displayName, premiumCheck, decodeCheck) =>{
            if(type != "profile" && (!loggedInUser.age || !loggedInUser.dateofbirth)){
              setActiveMenu({type : "agelock" , displayName : displayName})
            }else{
              setActiveMenu(
              loggedInUser.package && loggedInUser.package === "basic"
                ? decodeCheck
                  ? loggedInUser.journey.includes(type)
                    ? { type: "submitted", displayName: displayName }
                    : { type: type, displayName: displayName }
                  : { type: "locked", displayName: displayName }
                : loggedInUser.package === "intermediate" || loggedInUser.package === "advanced"
                ? loggedInUser.journey.includes(type)
                  ? { type: "submitted", displayName: displayName }
                  : { type: type, displayName: displayName }
                : premiumCheck
                ? { type: "locked", displayName: displayName }
                : { type: type, displayName: displayName }
            );
            }
          }
          }
        />
        <div className={css.contentContainer}>
          <div className={css.contentHeader}>
            My Dashboard
            <span
              id="welcome"
              className={css.contentUserName}
              onClick={() => setUserMenuOpen(true)}
            >
              {loggedInUser.name}
              <IconFilledDown
                className={css.contentHeaderDropIcon}
                size={"2x"}
                width="0"
              />
              {isUserMenuOpen && (
                <ul className={css.contentUserDropDown} ref={userMenuRef}>
                  <li className={css.contentUserDropDownItem}>
                    <Button
                      type="button"
                      className={css.contentUserDropDownBtn}
                      onClick={() =>
                        Router.push(
                          `/changepassword?email=${loggedInUser.email}`
                        )
                      }
                    >
                      <IconPassword
                        className={css.contentUserDropDownIcon}
                        size={"1x"}
                        width="0"
                      />
                      <span>Change Password</span>
                    </Button>
                  </li>
                  <li className={css.contentUserDropDownItem}>
                    <Button
                      type="button"
                      onClick={() => {
                        signOutUserAction();
                        Router.push("/");
                        dispatch({
                          type: CLEAR_STATE,
                          state: {}
                        });
                      }}
                      className={css.contentUserDropDownBtn}
                    >
                      <IconSignOut
                        className={css.contentUserDropDownIcon}
                        size={"1x"}
                        width="0"
                      />
                      <span>Sign Out</span>
                    </Button>
                  </li>
                </ul>
              )}
            </span>
          </div>
          <div className={css.content}>
            <div className={css.contentPageHeader}>
              {activeMenu.displayName}
            </div>
            <DashboardContentSelector
              plan={loggedInUser.package}
              pageLoad={activeMenu.displayName == "Interest" ? 'interest' : 'others'}
              menuType={activeMenu.type}
              setNextTest={() => setNextTest(true)}
              checkIsInterestTest={(flag:boolean) => setIsInterestTest(flag)}
              age = {parseInt(loggedInUser.age)}
            />
          </div>
        </div>
        {loggedInUser.guidedtour === true ? (
          <DashboardGuide userPackage={loggedInUser.package} userName={loggedInUser.name} />
        ) : null}
      </div>
    </PageLayout>
  );
};

export default Dashboard;
