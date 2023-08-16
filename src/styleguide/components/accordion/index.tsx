import React, { useState } from "react";
import classNames from "classnames";
import Button from "@styleguide/components/button";

import css from "./index.module.scss";

import { IconRight } from "@icons/index";

type AccordionProps = {
  title: string;
  content: string;
  open?: boolean;
};

const Accordion = ({ title, content, open = false }: AccordionProps) => {
  const [active, setActive] = useState(open);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className={css.accordionContainer}>
      <Button className={css.accordionBtn} onClick={() => toggleAccordion()}>
        <IconRight
          className={classNames(
            css.accordionIcon,
            active ? css.accordionIconRotate : ""
          )}
          width="0"
        />
        {title}
      </Button>
      <div
        className={classNames(
          css.accordionContent,
          active ? css.accordionContentHeight : css.accordionContentHeightZero
        )}
      >
        <p className={css.accordionText}>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
