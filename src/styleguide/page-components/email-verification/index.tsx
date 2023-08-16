import React, { useEffect } from "react";
import { useRouter } from "next/router";
import css from "./index.module.scss";

const AuthenticationMessage = () => {
  const Router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      Router.push("/");
    }, 2000);
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.accUpdated}>
        Congratulation! Your account has been updated.
      </h2>
      <br />
      <p className={css.redirectHome}>Redirecting you to Home page . . .</p>
    </div>
  );
};

export default AuthenticationMessage;
