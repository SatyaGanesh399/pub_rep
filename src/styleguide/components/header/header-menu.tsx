import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState
} from "react";
import { useRouter } from "next/router";
import {
  AuthorizationContext,
  CLEAR_STATE
} from "@context/authorization-context";
import classNames from "classnames";
import A from "@styleguide/components/a";
import { links } from "../../../types/links";
import { IconClose, IconPhone, IconMessage, IconUser } from "@icons/index";
import Img from "@styleguide/components/img";
import HeaderMenuLinks from "./header-menu-links";
import { avatarFileToBase64 } from "@src/utils";

import css from "./index.module.scss";

import { CONTACT_US_EMAIL, CONTACT_US_PHONE_NUMBER } from "@lib/staticRoutes";

import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER } from "@lib/constants";

type HeaderMenuProps = {
  isMenuOpen: boolean;
  onMenuClose: Function;
  onModalOpen: Function;
  tabs: links[];
};

const HeaderMenu = (props: HeaderMenuProps) => {
  const Router = useRouter();
  const [avatar, setAvatar] = useState("");
  const { loggedInUser, dispatch, signOutUserAction } = useContext(
    AuthorizationContext
  );
  const { isMenuOpen, onMenuClose, onModalOpen, tabs } = props;

  useEffect(() => {
    if (loggedInUser.avatar !== "") {
      avatarFileToBase64(loggedInUser.avatar, data => {
        setAvatar(data);
      });
    }
  }, [loggedInUser.avatar]);

  return (
    <div
      className={classNames(
        css.mobileMenuContainer,
        isMenuOpen ? css.menuOpen : css.menuClose
      )}
    >
      <IconClose
        className={css.mobileCloseIcon}
        size={"1x"}
        width="0"
        onClick={onMenuClose as MouseEventHandler<SVGElement>}
      />
      <div className={css.mobileNavbarContainer}>
        <div className={css.mobileNavbarTab}>
          {loggedInUser.avatar === "" ? (
            <IconUser className={css.mobileHeaderLogo} size={"6x"} width="0" />
          ) : (
            <div className={css.avatarContainer}>
              <Img
                className={css.mobileHeaderLogo}
                src={`${avatar}`}
                alt="user proile picture"
                https
              />
            </div>
          )}
          <div className={css.mobileUserBox}>
            <div className={css.mobileWelcomeUserText}>Welcome</div>
            <div className={css.mobileWelcomeUserText}>
              {loggedInUser.name ? loggedInUser.name : "User"}
            </div>
            {loggedInUser.name === "" ? (
              <button
                type="submit"
                className={css.mobileLoginBtn}
                onClick={() => {
                  onMenuClose(false);
                  onModalOpen(true);
                }}
              >
                Sign In
              </button>
            ) : (
              <button
                type="submit"
                className={css.mobileLoginBtn}
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
              </button>
            )}
          </div>
        </div>
        <HeaderMenuLinks tabs={tabs} />
        <div className={css.mobileNavbarTab}>
          <IconMessage size={"2x"} className={css.mobileNavbarIcon} width="0" />
          <A link={CONTACT_US_EMAIL} className={css.mobileNavbarTabs}>
            {CONTACT_EMAIL}
          </A>
        </div>
        <div className={css.mobileNavbarTab}>
          <IconPhone size={"2x"} className={css.mobileNavbarIcon} width="0" />
          <A link={CONTACT_US_PHONE_NUMBER} className={css.mobileNavbarTabs}>
            {CONTACT_PHONE_NUMBER}
          </A>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
