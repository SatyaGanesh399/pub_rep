import React, { useState, useEffect } from "react";
import Modal from "@src/styleguide/components/modal";
import Button from "@src/styleguide/components/button";

import css from "./modal.module.scss";
import { GUIDANCE_TYPE_DATA } from "@src/styleguide/lib/staticData";
import CheckBox from "@src/styleguide/components/check-box";
import { sendHomeModalData } from "@src/actions/general-actions";
import SignUpClipart from "@src/styleguide/svg-resources/sign-up-clipart";

const HomeModal = () => {
  const [isHomeModalOpen, setHomeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setHomeModalOpen(true), 2000);
  }, []);

  const [checkedGuidanceTypeState, setCheckedGuidanceTypeState] = useState(
    new Array(6).fill(false)
  );
  const [finalSelectedGuidanceTypes, setFinalSelectedGuidanceTypes] = useState(
    []
  );

  const handleOnChange = (event, position) => {
    const updatedCheckedState = checkedGuidanceTypeState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedGuidanceTypeState(updatedCheckedState);

    let selectedGuidanceTypes = [];
    updatedCheckedState.map((item, index) => {
      if (item === true) {
        selectedGuidanceTypes.push(GUIDANCE_TYPE_DATA[index].name);
      }
    });

    setFinalSelectedGuidanceTypes(selectedGuidanceTypes);
  };

  const btnOnClick = () => {
    sendHomeModalData(finalSelectedGuidanceTypes);
    setHomeModalOpen(false);
  };

  return (
    <>
      <Modal
        className={css.modalClass}
        isOpen={isHomeModalOpen}
        onClose={() => setHomeModalOpen(!isHomeModalOpen)}
      >
        <div className={css.modalContent}>
          <div className={css.modalClipart}>
            <SignUpClipart className={css.signUpSVG} />
          </div>
          <div className={css.homeModalCheckBox}>
            <div className={css.guidanceText}>
              <span>What type of guidance are you looking for?</span>
            </div>
            <div className={css.checkBoxContainer}>
              {GUIDANCE_TYPE_DATA.map(({ id, name }, index) => {
                return (
                  <CheckBox
                    key={id}
                    id={id}
                    value={name}
                    textLabel={name}
                    checked={checkedGuidanceTypeState[index]}
                    onChange={event => handleOnChange(event, index)}
                  />
                );
              })}
            </div>

            <div className={css.enquireButtonContainer}>
              <Button className={css.infoBtn} onClick={btnOnClick}>
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HomeModal;
