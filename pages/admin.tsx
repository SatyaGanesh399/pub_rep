import React from "react";
// import { ToastProvider } from "react-toast-notifications";
import Head from "next/head";
import AdminLogin from "@styleguide/page-components/admin";

const AdminPage = () => (
  <>
    <Head>
      <title>Admin</title>
    </Head>
      <AdminLogin />
  </>
);

export default AdminPage;
