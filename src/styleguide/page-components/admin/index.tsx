import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminDashboard from "./admin-dashboard";

const AdminLogin = () => {
  const Router = useRouter();
  const [isloggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const username = prompt("Please Log in. Enter Username", "");
    if (username === process.env.ADMIN_USERNAME) {
      const password = prompt("Enter Password", "");
      password === process.env.ADMIN_PASSWORD
        ? setLoggedIn(true)
        : Router.push("/");
    } else {
      Router.push("/");
    }
  }, []);

  return <>{isloggedIn ? <AdminDashboard /> : ""}</>;
};

export default AdminLogin;
