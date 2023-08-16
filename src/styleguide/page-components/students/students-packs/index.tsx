import React, { useState } from "react";
import classNames from "classnames";
import { IconCheck, IconLeft, IconRight } from "@icons/index";

import css from "./index.module.scss";

type StudentsPacksProps = {
  getPackageType: Function;
};

const StudentsPacks = ({ getPackageType }: StudentsPacksProps) => {
  const [packIndex, setPackIndex] = useState(1);
  const [packageSwitch, setPackageSwitch] = useState({
    isAgree: false,
    package: "package1"
  });
  return (
    <div className={css.packsContainer} id="packages">
      <div className={css.packsHeading}>Options Available To You</div>
      <div className={css.packsSubHeading}>
        See which choice meets your need, we always suggest talking to our
        counsellor before selecting!
      </div>
      <div className={css.packs}>
        <IconLeft
          className={classNames(
            css.packsNavigationIcon,
            css.packsNavigationLeft,
            packIndex === 1 ? css.packsNavigationHide : ""
          )}
          size={"2x"}
          width="0"
          onClick={() => setPackIndex(packIndex - 1)}
        />
        <IconRight
          className={classNames(
            css.packsNavigationIcon,
            css.packsNavigationRight,
            packIndex === 2 ? "" : packIndex === 3 ? css.packsNavigationHide : ""
          )}
          size={"2x"}
          width="0"
          onClick={() => setPackIndex(packIndex + 1)}
        />
        <div
          className={classNames(
            css.packItem,
            packIndex !== 1 ? css.packItemHide : ""
          )}
        >
          <div className={css.packItemHeading}>Decode</div>
          <div className={css.packItemPrice}>
            &#8377; {process.env.BASIC_PACKAGE_PRICE}
          </div>
          <div className={css.packItemPoints}>
          <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Pyschometric Assessment
              <span className={classNames(css.subPointText, css.pointDisabled)}>
                {" "}
                (Interest)
              </span>
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck className={classNames(css.pointCheckIcon, css.pointDisabled)} size={"2x"} width="0" />
              Pyschometric Assessment
              <span className={classNames(css.subPointText, css.pointDisabled)}>
                {" "}
                (Aptitude, Personality, Work Orientation, Emotional
                Quotient)
              </span>
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck className={classNames(css.pointCheckIcon, css.pointDisabled)} size={"2x"} width="0" />
              2 Counsellor Sessions
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck className={classNames(css.pointCheckIcon, css.pointDisabled)} size={"2x"} width="0" />
              Access to Career Bank
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck
                className={classNames(css.pointCheckIcon, css.pointDisabled)}
                size={"2x"}
                width="0"
              />
              Personalized College Planning
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck
                className={classNames(css.pointCheckIcon, css.pointDisabled)}
                size={"2x"}
                width="0"
              />
              Session with an Industry Expert
            </p>
          </div>
          <div className={css.buyAnchorContainer}>
          <a
            className={css.packBuyAnchor}
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => getPackageType("BASIC")}
          >
            Buy
          </a>
          </div>
        </div>
        <div
          className={classNames(
            css.packItem,
            packIndex !== 2 ? css.packItemHide : ""
          )}
        >
          <div className={css.packItemHeading}>Decide</div>
          <div className={css.packItemPrice}>
            &#8377; {process.env.INTERMEDIATE_PACKAGE_PRICE}
          </div>
          <div className={css.packItemPoints}>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Pyschometric Assessment
              <span className={classNames(css.subPointText, css.pointDisabled)}>
                {" "}
                (Aptitude, Interest, Personality, Work Orientation, Emotional
                Quotient)
              </span>
            </p>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              2 Counsellor Sessions
            </p>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Access to Career Bank
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck
                className={classNames(css.pointCheckIcon, css.pointDisabled)}
                size={"2x"}
                width="0"
              />
              Personalized College Planning
            </p>
            <p className={classNames(css.point, css.pointDisabled)}>
              <IconCheck
                className={classNames(css.pointCheckIcon, css.pointDisabled)}
                size={"2x"}
                width="0"
              />
              Session with an Industry Expert
            </p>
          </div>
          <div className={css.buyAnchorContainer}>
          <a
            className={css.packBuyAnchor}
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => getPackageType("INTERMEDIATE")}
            >
            Buy
          </a>
            </div>
        </div>
        <div
          className={classNames(
            css.packItem,
            packIndex !== 3 ? css.packItemHide : ""
          )}
        >
          <div className={css.packItemHeading}>Design</div>
          <div className={css.packItemPrice}>
            &#8377; {process.env.ADVANCED_PACKAGE_PRICE}
          </div>
          <div className={css.packItemPoints}>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Pyschometric Assessment
              <span className={classNames(css.subPointText, css.pointDisabled)}>
                {" "}
                (Aptitude, Interest, Personality, Work Orientation, Emotional
                Quotient)
              </span>
            </p>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              3-4 Counsellor Sessions
            </p>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Access to Career Bank
            </p>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Personalized College Planning
            </p>
            <p className={css.point}>
              <IconCheck className={css.pointCheckIcon} size={"2x"} width="0" />
              Session with an Industry Expert
            </p>
          </div>
          <div className={css.buyAnchorContainer}>
          <a
            className={css.packBuyAnchor}
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => getPackageType("ADVANCED")}
            >
            Buy
          </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPacks;
