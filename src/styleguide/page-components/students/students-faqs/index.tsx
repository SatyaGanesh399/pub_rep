import React, { useState, useEffect } from "react";
import Accordion from "@styleguide/components/accordion";

import css from "./index.module.scss";

const StudentsFaqs = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <div>
      {width && (
        <>
          <div className={css.faqsHeading}>Frequently Asked Questions</div>
          <div className={css.faqsContainer}>
            <div className={css.faqs1366Container}>
              <div className={css.faqsColumn}>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="What is the right class for Brain Mapping?"
                    content="We strongly recommend Class IX- X for assessment & counselling as that is the time for right stream & subject selection and planning for the future."
                    open={true}
                  />
                </div>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="How long is the process for the testing?"
                    content="There are in total 5 tests, they all are of different time durations. Total time for all tests can vary between 2.5 hours to 3 hours."
                    open={width >= 450 ? true : false}
                  />
                </div>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="How accurate is the test?"
                    content="The tests are internationally standardised, with cross sectional validity and reliability. They are based on large scale research principles and exclusively put together for an entirely accurate result."
                    open={width >= 450 ? true : false}
                  />
                </div>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="Can I take break in between tests?"
                    content="Yes, you can take breaks in between different tests but you can’t leave one test halfway."
                    open={width >= 450 ? true : false}
                  />
                </div>
              </div>
              <div className={css.faqsColumn}>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="What if I lie/cheat on the test?"
                    content="Most of the tests are designed to catch false answers, yet we would request not to give false answers on the test as it’ll only have an impact on your future."
                    open={width >= 450 ? true : false}
                  />
                </div>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="How will I know which program is best for me?"
                    content="Speak to our counsellor for free and get to know what program suits you best. It's always better to consult our expert!"
                    open={width >= 450 ? true : false}
                  />
                </div>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="Will my interests influence the test?"
                    content="Interests will be evaluated clinically to match your skills to provide for the most accurate results. All tests work on subconscious mind so you don’t have to worry about being right or wrong."
                    open={width >= 450 ? true : false}
                  />
                </div>
                <div className={css.accordionContainer}>
                  <Accordion
                    title="Can I upgrade my program in between?"
                    content="Yes, you may upgrade your program at any time by paying the difference of cost at that moment."
                    open={width >= 450 ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsFaqs;
