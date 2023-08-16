import React, { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import Accordion from "@styleguide/components/accordion";
import PageLayout from "@page-components/page-layout";
import Img from "@styleguide/components/img";
import Button from "@styleguide/components/button";
import CareerContactClipart from "@svg-resources/career-contact-clipart";
import { getCareerData } from "@src/actions/general-actions";
import Select2 from "@styleguide/components/select2";
import { Career } from "@src/types/career";
import A from "@styleguide/components/a";

import css from "./index.module.scss";

import { FOOTER_CONTACTUS } from "@lib/staticRoutes";

type CareerPageProps = {
  name: string;
};

const CareerPage = ({ name }: CareerPageProps) => {
  useEffect(() => {
    name !== undefined
      ? getCareerData(name).then(res => setCareerData(res))
      : "";
  }, [name]);

  const [optionIndex, setOptionIndex] = useState(0);
  const [careerData, setCareerData] = useState<Career>({
    summary: [],
    title: "",
    titleImg: "",
    titleText: "",
    description: "",
    skills: [{ title: "", text: "" }],
    options: {
      types: [],
      school: [],
      graduation: [],
      post: []
    },
    job: [{ title: "", text: "" }],
    personalities: [{ title: "", text: "" }],
    institute: [
      {
        name: "",
        location: "",
        link: ""
      }
    ],
    pros: [],
    cons: []
  });

  return (
    <PageLayout>
      <>
        <div className={css.careerContainer} id="summary">
          {/* About Container */}
          <div className={css.aboutHeadingContainer}>
            <div className={classNames(css.mainCareerHeading)}>
              {careerData.title}
            </div>
            <div id={css.dropdown}>
              <Select2 />
            </div>
          </div>

          <div className={css.about}>
            <div className={css.aboutText}>
              <Img
                alt="Career Image"
                src={careerData.titleImg}
                className={css.careerClipart2}
              />
              <p className={css.careerText}>{careerData.titleText}</p>
            </div>
            <Img
              alt="Career Image"
              src={careerData.titleImg}
              className={css.careerClipart1}
            />
          </div>
          {/* About Container */}
          {/* Working Container */}
          <div className={css.working}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_working.svg`}
                className={css.sideClipart}
              />
              Description
            </div>
            <p className={css.careerText}>{careerData.description}</p>
          </div>
          {/* Working Container */}
          {/* Skills Container */}
          <div className={css.skills}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_skills.svg`}
                className={css.sideClipart}
              />
              Skills Required
            </div>
            <ul className={classNames(css.skillTabs, css.skillList)}>
              {careerData.skills.map((skill, i) => (
                <div
                  className={css.accordContainer}
                  key={`skills_accordion_${i}`}
                >
                  <Accordion
                    title={skill.title}
                    content={skill.text}
                    open={i === 0 ? true : false}
                  />
                </div>
              ))}
            </ul>
          </div>
          {/* Skills Container */}
          {/* Pursue Container */}
          <div className={css.pursue}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_pursue.svg`}
                className={css.sideClipart}
              />
              How To Pursue
            </div>
            <div className={css.optionsTabs}>
              {careerData.options.types.map((type, i) => (
                <Button
                  className={classNames(
                    css.optionTab,
                    optionIndex === i ? css.activeOptionTab : ""
                  )}
                  onClick={() => setOptionIndex(i)}
                  key={`options_btn_mobile_${i}`}
                >
                  {type.toString().toUpperCase()}
                </Button>
              ))}
            </div>
            <div className={css.tableFirstRow}>
              <div className={css.tableColHeading}></div>
              {careerData.options.types.map((type, i) => (
                <div
                  className={classNames(
                    css.tableColHeading,
                    optionIndex === i ? "" : css.tableColHeadingHidden
                  )}
                  key={`options_btn_${i}`}
                >
                  {type.toString().toUpperCase()}
                </div>
              ))}
            </div>
            <div className={css.table}>
              <div className={css.tableRow}>
                <div className={classNames(css.tableCol, css.tableRowHeading)}>
                  School
                </div>
                {careerData.options.school.map((option, i) => (
                  <div
                    className={classNames(
                      css.tableCol,
                      optionIndex === i ? "" : css.tableColHidden
                    )}
                    key={`option_school_${i}`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className={css.tableRow}>
                <div className={classNames(css.tableCol, css.tableRowHeading)}>
                  Graduation
                </div>
                {careerData.options.graduation.map((option, i) => (
                  <div
                    className={classNames(
                      css.tableCol,
                      optionIndex === i ? "" : css.tableColHidden
                    )}
                    key={`option_grad_${i}`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className={css.tableRow}>
                <div className={classNames(css.tableCol, css.tableRowHeading)}>
                  Post Graduation
                </div>
                {careerData.options.post.map((option, i) => (
                  <div
                    className={classNames(
                      css.tableCol,
                      optionIndex === i ? "" : css.tableColHidden
                    )}
                    key={`option_post_${i}`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Pursue Container */}
          {/* Job Container */}
          <div className={css.job}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_job.svg`}
                className={css.sideClipart}
              />
              Job Opportunities
            </div>
            <div className={classNames(css.accordions, css.jobAccordion)}>
              {careerData.job.map((job, i) => (
                <div className={css.accordContainer} key={`job_accordion_${i}`}>
                  <Accordion
                    title={job.title}
                    content={job.text}
                    open={i === 0 ? true : false}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Job Container */}
          {/* personalities Container */}
          <div className={css.personalities}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_personalities.svg`}
                className={css.sideClipart}
              />
              Some Famous Personalities
            </div>
            <div className={css.accordions}>
              {careerData.personalities.map((job, i) => (
                <div
                  className={css.accordContainer}
                  key={`personality_accordion_${i}`}
                >
                  <Accordion
                    title={job.title}
                    content={job.text}
                    open={i === 0 ? true : false}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* personalities Container */}
          {/* institutions Container */}
          <div className={css.institutions}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_institutions.svg`}
                className={css.sideClipart}
              />
              Top Indian Institutions
            </div>
            <div className={classNames(css.table, css.tableCustom)}>
              <div className={classNames(css.tableRow, css.tableRowCustom1)}>
                <div
                  className={classNames(
                    css.tableCol,
                    css.tableRowHeading,
                    css.tableColCustom
                  )}
                >
                  Institution
                </div>
                <div
                  className={classNames(
                    css.tableCol,
                    css.tableRowHeading,
                    css.tableColCustomHidden
                  )}
                >
                  Location
                </div>
              </div>
              <div className={classNames(css.tableRow, css.tableRowCustom2)}>
                <div className={classNames(css.tableCol, css.tableColCustom1)}>
                  <ul className={classNames(css.careerList, css.instituteList)}>
                    {careerData.institute.map((institute, i) => (
                      <li key={`institute_name_${i}`}>
                        <A
                          link={institute.link}
                          targetBlank
                          className={css.instituteLink}
                        >
                          {institute.name}
                        </A>
                        <span className={css.locationSpan}>
                          , {institute.location}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={classNames(css.tableCol, css.tableColCustomHidden)}
                >
                  <ul className={css.careerListNormal}>
                    {careerData.institute.map((institute, i) => (
                      <li key={`institute_location_${i}`}>
                        {institute.location}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* institutions Container */}
          {/* pros Container */}
          <div className={css.pros}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_pros.svg`}
                className={css.sideClipart}
              />
              Pros
            </div>
            <ul className={css.careerList}>
              {careerData.pros.map((pro, i) => (
                <li key={`pro_li_${i}`}>{pro}</li>
              ))}
            </ul>
          </div>
          {/* pros Container */}
          {/* cons Container */}
          <div className={css.cons}>
            <div className={css.careerTextHeader}>
              <Img
                alt="Career icon"
                src={`career_cons.svg`}
                className={css.sideClipart}
              />
              Cons
            </div>
            <ul className={css.careerList}>
              {careerData.cons.map((con, i) => (
                <li key={`con_li_${i}`}>{con}</li>
              ))}
            </ul>
          </div>
          {/* cons Container */}
          <div className={css.contactBannerContainer}>
            <div className={css.contactBanner}>
              <div className={css.bannerContent}>
                <div className={css.bannerHeading}>Are you confused?</div>
                <div className={css.bannerSubText}>Talk To Our Counsellor</div>
                <Link href={FOOTER_CONTACTUS}>
                  <button className={css.bannerBtn}>Contact Us</button>
                </Link>
              </div>
              <CareerContactClipart className={css.contactClipart} />
            </div>
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default CareerPage;
