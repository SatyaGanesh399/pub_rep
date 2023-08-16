import React from "react";

import css from "./index.module.scss";

type FlipCardProps = {
  title: string;
  text: string;
};

const FlipCard = ({ title, text }: FlipCardProps) => (
  <div className={css.flipCard}>
    <div className={css.flipCardInner}>
      <div className={css.flipCardFront}>{title}</div>
      <div className={css.flipCardBack}>{text}</div>
    </div>
  </div>
);

export default FlipCard;
