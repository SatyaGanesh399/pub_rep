import React from "react";
import Head from "next/head";
import AuthenticationMessage from "@page-components/email-verification";
import PageLayout from "@page-components/page-layout";
const authentication = () => {
  return (
    <PageLayout>
      <div>
        <Head>
          <title>Verification</title>
        </Head>
        <AuthenticationMessage />
      </div>
    </PageLayout>
  );
};

export default authentication;
