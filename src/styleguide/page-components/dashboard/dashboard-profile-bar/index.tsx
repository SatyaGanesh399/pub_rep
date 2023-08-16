import React, { useContext, useEffect, useState } from "react";
import addToast from 'react-hot-toast'
import {
  AuthorizationContext,
  UPDATE_AVATAR
} from "@context/authorization-context";
import A from "@styleguide/components/a";
import Img from "@styleguide/components/img";
import UploadModal from "@page-components/upload-modal";
import { avatarFileToBase64 } from "@src/utils";

import css from "./index.module.scss";

import { IconEdit, IconUser } from "@icons/index";

import { HEADER_STUDENTS } from "@lib/staticRoutes";

const DashboardProfileSection = () => {

  const {
    loggedInUser,
    uploadAvatarAction,
    getLocalStorageData,
    dispatch
  } = useContext(AuthorizationContext);
  const [avatar, setAvatar] = useState("");
  const [isUploadModalVisible, setUploadModalVisibility] = useState(false);

  useEffect(() => {
    if (loggedInUser.avatar !== "") {
      avatarFileToBase64(loggedInUser.avatar, data => {
        setAvatar(data);
      });
    }
  }, [loggedInUser.avatar]);

  const uploadAvatar = formData => {
    if (formData !== false) {
      formData.append("email", loggedInUser.email);
      uploadAvatarAction(formData, getLocalStorageData().token)
        .then(res => {
          setUploadModalVisibility(false);
          dispatch({
            type: UPDATE_AVATAR,
            state: {
              avatar: res.message
            }
          });
          addToast.success(`Avatar uploaded`)
        })
        .catch(err =>
          addToast.error(err.response.data)
        );
    } else {
      setUploadModalVisibility(false);
      addToast.error("Select File to Upload")
    }
  };

  return (
    <>
      <div
        className={css.profilePicContainer}
        onClick={() => setUploadModalVisibility(true)}
      >
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

        <IconEdit className={css.profilePicEdit} size={"1x"}  />
      </div>
      <UploadModal
        modalBtnText="Upload"
        modalClipartType={"avatar"}
        modalText="Select File"
        isModalOpen={isUploadModalVisible}
        onModalClose={uploadAvatar}
        showCloseBtn={false}
      />
      <span className={css.userName}>{loggedInUser.name}</span>
      <A
        className={css.packageBtn}
        internal
        link={`${HEADER_STUDENTS}/#packages`}
      >
        {loggedInUser.package === "none" ? "Buy Package" : "Upgrade Package"}
      </A>
    </>
  );
};

export default DashboardProfileSection;
