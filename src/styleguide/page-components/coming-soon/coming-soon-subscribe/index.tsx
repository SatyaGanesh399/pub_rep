import React, { useState } from "react";
import css from "./index.module.scss";

const ComingSoonSubscribe = () => {
  const [isSubscribed, setSubscribe] = useState(false);

  return (
    <div className={css.container}>
      <span className={css.subscribeHeading}>
        Book your free session today with us
      </span>
      {isSubscribed ? (
        <div className={css.subscribeThanks}>Thanks for Subscribing!</div>
      ) : (
        <div className={css.subscribeInputContainer}>
          <input
            className={css.subscribeInput}
            type="text"
            placeholder="Email"
          />
          <input
            className={css.subscribeBtn}
            onClick={() => setSubscribe(true)}
            type="submit"
            value="Subscribe"
          />
        </div>
      )}
    </div>
  );
};

export default ComingSoonSubscribe;
