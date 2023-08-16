import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import InstitutionType2Clipart from "@svg-resources/institution-type2-clipart";
import InstitutionType1Clipart from "@svg-resources/institution-type1-clipart";

import css from "./index.module.scss";

import { IconLeft, IconRight } from "@icons/index";

import { FOOTER_CONTACTUS } from "@lib/staticRoutes";

const InstitutionTypes = () => {
  const [typeIndex, setTypeIndex] = useState(1);

  return (
    <div className={css.typesContainer} id="types">
      <div className={css.typesHeading}>How We Help Your Students?</div>
      <div className={css.typesSubHeading}>
        Select the program that suits you or let&apos;s meet and discuss what is
        better for your school
      </div>
      <div className={css.types}>
        <IconLeft
          className={classNames(
            css.typesNavigationIcon,
            css.typesNavigationLeft,
            typeIndex === 1 ? css.typesNavigationHide : ""
          )}
          size={"2x"}
          width="0"
          onClick={() => setTypeIndex(typeIndex - 1)}
        />
        <IconRight
          className={classNames(
            css.typesNavigationIcon,
            css.typesNavigationRight,
            typeIndex === 2 ? css.typesNavigationHide : ""
          )}
          size={"2x"}
          width="0"
          onClick={() => setTypeIndex(typeIndex + 1)}
        />
        <div
          className={classNames(
            css.typeItem,
            typeIndex !== 1 ? css.typeItemHide : ""
          )}
        >
          <div className={css.typeItemHeading}>
            <InstitutionType2Clipart className={css.typeItemHeadingClipart} />
            <span className={css.typeItemHeadingText}>Pro Garten Partner</span>
          </div>
          <div className={css.typeItemContent}>
            A year association that we build with you and your students. We
            offer quarterly mental health talks, motivational lectures,
            workshops and career counselling sessions along with regular
            psychometric testing and report discussion with parents.
          </div>
          <Link href={FOOTER_CONTACTUS}>
            <button className={css.typeBuyBtn}>Contact Us</button>
          </Link>
        </div>
        <div
          className={classNames(
            css.typeItem,
            typeIndex !== 2 ? css.typeItemHide : ""
          )}
        >
          <div className={css.typeItemHeading}>
            <InstitutionType1Clipart className={css.typeItemHeadingClipart} />
            <span className={css.typeItemHeadingText}>Tailor Made Program</span>
          </div>
          <div className={css.typeItemContent}>
            We closely work with your team of in-school counsellors and teachers
            to design the most suited program for your students. Customizing the
            program that brings the most value to your institution in terms of
            better performing students and a successful alumni.
          </div>
          <Link href={FOOTER_CONTACTUS}>
            <button className={css.typeBuyBtn}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstitutionTypes;
