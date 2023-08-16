import React from "react";
import PageLayout from "@page-components/page-layout";
import Select2 from "@styleguide/components/select2";

import CareerHero from "./career-hero";

import css from "./index.module.scss";

const CareersPage = () => {
  return (
    <PageLayout>
      <>
        <CareerHero />
        <div className={css.careerHeading} id="summary">
          Checkout exciting careers
        </div>
        <div className={css.selectContainer}>
          <Select2 />
        </div>
      </>
    </PageLayout>
  );
};

export default CareersPage;
