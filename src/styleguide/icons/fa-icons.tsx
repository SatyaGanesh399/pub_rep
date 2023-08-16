/*
 * This file will be the single source for all Font Awesome icons
 * To add New Icon, simply import from FontAwesome Package
 * Then add it in library.add(....)
 * export with name "IconYourName" and add default params
 * */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faBars,
  faTimes,
  faCogs,
  faLock,
  faLockOpen,
  faUsersCog,
  faCalendarAlt,
  faBuilding,
  faMouse,
  faEye,
  faEyeSlash,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faCaretDown,
  faPlay,
  faEdit,
  faUserCircle,
  faHome,
  faSyncAlt,
  faSignOutAlt,
  faKey,
  faClock,
  faLaptopHouse,
  faMapMarkerAlt,
  faCheck,
  faDownload,
  faCalendarPlus,
  faPercent
} from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookSquare, faLinkedin, faPhoneAlt, faEnvelope);

interface FontAwesomePropsWithoutIcon
  extends Omit<FontAwesomeIconProps, "icon"> {}

const buildIconWithProps = (icon, props: FontAwesomePropsWithoutIcon) => (
  <FontAwesomeIcon icon={icon} {...props} />
);

export const IconLinkedIn = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faLinkedin, { color: "#3f729b", ...props });

export const IconFacebook = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faFacebookSquare, {
    color: "#3b5998",
    ...props
  });

export const IconPhone = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faPhoneAlt, props);

export const IconMessage = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faEnvelope, props);

export const IconMenu = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faBars, props);

export const IconClose = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faTimes, props);

export const IconCalendar = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faCalendarAlt, props);

export const IconCogs = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faCogs, props);

export const IconUsersCog = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faUsersCog, props);

export const IconBuilding = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faBuilding, props);

export const IconMouse = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faMouse, props);

export const IconEye = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faEye, props);

export const IconEyeSlash = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faEyeSlash, props);

export const IconLeft = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faChevronLeft, props);

export const IconRight = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faChevronRight, props);

export const IconPlay = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faPlay, props);

export const IconEdit = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faEdit, props);

export const IconUp = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faChevronUp, props);

export const IconDown = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faChevronDown, props);

export const IconFilledDown = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faCaretDown, props);

export const IconUser = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faUserCircle, props);

export const IconHome = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faHome, props);

export const IconRefresh = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faSyncAlt, props);

export const IconSignOut = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faSignOutAlt, props);

export const IconPassword = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faKey, props);

export const IconClock = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faClock, props);

export const IconMode = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faLaptopHouse, props);

export const IconAddress = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faMapMarkerAlt, props);

export const IconCheck = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faCheck, props);

export const IconDownload = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faDownload, props);

export const IconEvent = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faCalendarPlus, props);

export const IconOffer = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faPercent, props);

  export const IconLock = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faLock, props);

  export const IconLockOpen = (props: FontAwesomePropsWithoutIcon) =>
  buildIconWithProps(faLockOpen, props);
