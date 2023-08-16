import React, { useState } from "react";
import classNames from "classnames";
import { addAsSuscriber } from "@src/actions/general-actions";

import css from "./index.module.scss";

type SubscribeProps = {
  children: string;
  inputStyles?: string;
  buttonStyles?: string;
  className?: string;
};

const Subscribe = ({
  children,
  className,
  inputStyles,
  buttonStyles
}: SubscribeProps) => {
  const [isSubscribed, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  const addSubscriber = () => {
    if (email === "") {
      return false;
    }
    addAsSuscriber(email)
      .then(res => setSubscribe(true))
      .catch(err => setSubscribe(true));
  };

  return (
    <div className={classNames(css.subscribeContainer, className)}>
      <span className={css.subscribeHeading}>{children}</span>
      {isSubscribed ? (
        <div className={css.subscribeThanks}>Thanks for Subscribing!</div>
      ) : (
        <div className={css.subscribeInputContainer}>
          <input
            className={classNames(css.subscribeInput, inputStyles)}
            type="text"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={classNames(css.subscribeBtn, buttonStyles)}
            onClick={addSubscriber}
            type="submit"
            value="Subscribe"
          />
        </div>
      )}
    </div>
  );
};

export default Subscribe;
