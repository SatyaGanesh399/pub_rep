import React, { useContext, useEffect, useState } from "react";
import { AuthorizationContext } from "@context/authorization-context";
import A from "@styleguide/components/a";
import Img from "@styleguide/components/img";
import { avatarFileToBase64 } from "@src/utils";

import css from "./index.module.scss";

import { IconUser } from "@icons/index";

import { HEADER_STUDENTS } from "@lib/staticRoutes";

const DashboardMobileProfileSection = () => {
  const [avatar, setAvatar] = useState("");
  const { loggedInUser } = useContext(AuthorizationContext);

  useEffect(() => {
    if (loggedInUser.avatar !== "") {
      avatarFileToBase64(loggedInUser.avatar, data => {
        setAvatar(data);
      });
    }
  }, [loggedInUser.avatar]);

  return (
    <>
      <div className={css.profilePicContainer}>
        {loggedInUser.avatar === "" ? (
          <IconUser className={css.profilePic} size={"6x"} width="0" />
        ) : (
          <div className={css.avatarContainer}>
            <Img
              className={css.profilePic}
              src={`${avatar}`}
              alt="user proile picture"
              https
            />
          </div>
        )}
      </div>
      <div className={css.profileDataContainer}>
        <span className={css.userName}>{loggedInUser.name}</span>
        <A
          className={css.packageBtn}
          internal
          link={`${HEADER_STUDENTS}/#packages`}
        >
          {loggedInUser.package === "none" ? "Buy Package" : "Upgrade Package"}
        </A>
      </div>
    </>
  );
};

export default DashboardMobileProfileSection;
