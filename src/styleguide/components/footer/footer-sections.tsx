import React from "react";
import A from "@styleguide/components/a";
import LinkTabs from "@styleguide/components/link-tabs";
import { links } from "../../../types/links";
import { IconMessage, IconPhone } from "@icons/index";

import css from "./index.module.scss";

import {
  FOOTER_ABOUTUS,
  FOOTER_CONTACTUS,
  FOOTER_TERMSCONDITIONS,
  FOOTER_PRIVACY,
  CONTACT_US_EMAIL,
  CONTACT_US_PHONE_NUMBER
} from "@lib/staticRoutes";

import {
  FOOTER_ABOUT_TITLE,
  FOOTER_CONTACT_TITLE,
  FOOTER_PRIVACY_TITLE,
  FOOTER_TERMS_TITLE,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_NUMBER
} from "@lib/constants";

const footerTabs: links[] = [
  {
    linkName: FOOTER_ABOUT_TITLE,
    linkVal: FOOTER_ABOUTUS
  },
  {
    linkName: FOOTER_CONTACT_TITLE,
    linkVal: FOOTER_CONTACTUS
  },
  {
    linkName: FOOTER_TERMS_TITLE,
    linkVal: FOOTER_TERMSCONDITIONS
  },
  {
    linkName: FOOTER_PRIVACY_TITLE,
    linkVal: FOOTER_PRIVACY
  }
];

const FooterSections = () => {
  return (
    <div className={css.footerSections}>
      <div className={css.footerLinksSection}>
        <div className={css.footerHeading}>Company</div>
        <LinkTabs tabs={footerTabs} footer={true} tabsStyle={css.footerLinks} type="footer" />
      </div>
      <div className={css.footerContactSection}>
        <div className={css.footerHeading}>Contact Us</div>
        <div className={css.footerContactDetails}>{CONTACT_ADDRESS}</div>
        <A link={CONTACT_US_EMAIL} className={css.footerContactDetails}>
          <IconMessage
            className={css.footerContactIcons}
            size={"1x"}
            width="0"
          />
          <span>{CONTACT_EMAIL}</span>
        </A>
        <A link={CONTACT_US_PHONE_NUMBER} className={css.footerContactDetails}>
          <IconPhone className={css.footerContactIcons} size={"1x"} width="0" />
          <span>{CONTACT_PHONE_NUMBER}</span>
        </A>
      </div>
    </div>
  );
};

export default FooterSections;
