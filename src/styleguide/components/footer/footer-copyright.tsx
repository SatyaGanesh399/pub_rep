import React from "react";
import A from "@styleguide/components/a";
import Img from "@styleguide/components/img";

import css from "./index.module.scss";

import {
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_WHATSAPP,
  SOCIAL_YOUTUBE
} from "@lib/staticRoutes";

const FooterCopyright = () => {
  return (
    <div className={css.footerCopyright}>
      <div className={css.copyrightText}>
        © Pro Garten 2021 All Rights Reserved
      </div>
      <div className={css.footerSocial}>
        <A link={SOCIAL_FACEBOOK} className={css.footerSocialTabs}>
          <Img
            src={"footerFacebook.svg"}
            alt="facebook logo"
            className={css.footerSocialIcon}
          />
        </A>
        <A link={SOCIAL_INSTAGRAM} className={css.footerSocialTabs}>
          <Img
            src={"footerInstagram.svg"}
            alt="instagram logo"
            className={css.footerSocialIcon}
          />
        </A>
        <A link={SOCIAL_LINKEDIN} className={css.footerSocialTabs}>
          <Img
            src={"footerLinkedin.svg"}
            alt="linkedin logo"
            className={css.footerSocialIcon}
          />
        </A>
        <A link={SOCIAL_WHATSAPP} className={css.footerSocialTabs}>
          <Img
            src={"WPFooter.svg"}
            alt="facebook logo"
            className={css.footerSocialIcon}
          />
        </A>
        <A link={SOCIAL_TWITTER} className={css.footerSocialTabs}>
          <Img
            src={"TwitterFooter.svg"}
            alt="facebook logo"
            className={css.footerSocialIcon}
          />
        </A>
        <A link={SOCIAL_YOUTUBE} className={css.footerSocialTabs}>
          <Img
            src={"YTFooter.svg"}
            alt="facebook logo"
            className={css.footerSocialIcon}
          />
        </A>
      </div>
    </div>
  );
};

export default FooterCopyright;
