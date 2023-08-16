import React from "react";
import Head from "next/head";
import StudentsPage from "@styleguide/page-components/students";
import PageLayout from "@page-components/page-layout";

const Students = () => (
  <>
    <Head>
      <title>Students</title>
    </Head>
    <PageLayout>
      <StudentsPage />
    </PageLayout>
  </>
);

export default Students;
