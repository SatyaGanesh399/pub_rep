import React from "react";
import classNames from "classnames";
import A from "@styleguide/components/a";
import { IconBuilding, IconMessage, IconPhone } from "@icons/index";

import css from "./index.module.scss";

import { CONTACT_US_EMAIL, CONTACT_US_PHONE_NUMBER } from "@lib/staticRoutes";

import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_NUMBER
} from "@lib/constants";

const ContactDetails = () => (
  <div className={css.contactInfo}>
    <A link={CONTACT_US_PHONE_NUMBER} className={css.contactInfoSection}>
      <IconPhone className={css.contactIcons} size={"2x"} width="0" />
      <span>{CONTACT_PHONE_NUMBER}</span>
    </A>
    <A link={CONTACT_US_EMAIL} className={css.contactInfoSection}>
      <IconMessage className={css.contactIcons} size={"2x"} width="0" />
      <span>{CONTACT_EMAIL}</span>
    </A>
    <div className={css.contactInfoSection}>
      <IconBuilding
        className={classNames(css.contactIcons, css.contactBuildingIcon)}
        size={"2x"}
        width="0"
      />
      <span>{CONTACT_ADDRESS}</span>
    </div>
  </div>
);

export default ContactDetails;
