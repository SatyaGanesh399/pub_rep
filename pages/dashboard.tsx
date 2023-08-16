import React, { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardPage from "@page-components/dashboard";
import {
  AuthorizationContext,
  UPDATE_USER
} from "@context/authorization-context";
import { User } from "@src/types/user";
import { NextPageContext } from "next";
const Dashboard = ({ JWT }: { JWT: any }) => {
  const { getLoggedInUserAction, getLocalStorageData, dispatch } = useContext(
    AuthorizationContext
  );
  const Router = useRouter();

  const routeToHome = async () => {
    await Router.push("/");
  };
  useEffect(() => {
    const { token, userEmail } = getLocalStorageData();
    if (JWT !== undefined && token == undefined) {
      localStorage.setItem("_token", JWT.toString().split(".")[1]); //local auth
    }
    if (token === null || token === undefined) {
      routeToHome();
    } else {
      getLoggedInUserAction(
        {
          email: userEmail
        },
        token
      )
        .then((user: User) => {
          dispatch({
            type: UPDATE_USER,
            state: user
          });
        })
        .catch(error => {
          console.error("Server Error", error);
          routeToHome();
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardPage />
    </>
  );
};

Dashboard.getInitialProps = (ctx: NextPageContext) => {
  const JWT_TOKEN = ctx.req ? ctx.req.headers.cookie : undefined;
  return {
    JWT: JWT_TOKEN
  };
};

export default Dashboard;
