import React from "react";
import PageLayout from "@page-components/page-layout";

import InstitutionHero from "./institution-hero";
import InstitutionTypes from "./institution-types";

const InstitutionPage = () => (
  <PageLayout>
    <>
      <InstitutionHero />
      <InstitutionTypes />
    </>
  </PageLayout>
);

export default InstitutionPage;
