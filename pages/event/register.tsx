import React from "react";
import Head from "next/head";
import EventsRegisterSection from "@page-components/register";
import PageLayout from "@page-components/page-layout";

const Register = () => (
  <>
    <Head>
      <title>Register</title>
    </Head>
    <PageLayout>
      <EventsRegisterSection />
    </PageLayout>
  </>
);

export default Register;
