import React, { ChangeEvent, useState } from "react";
import Modal from "@styleguide/components/modal";
import Button from "@styleguide/components/button";
import css from './index.module.scss'
import Input from "@src/styleguide/components/input";
import SignUpClipart from "@src/styleguide/svg-resources/sign-up-clipart";
import CheckBox from "@src/styleguide/components/check-box";
import {
  ASSESSMENT_INTEREST,
  ASSESSMENT_INTEREST_B
} from "@lib/aptitudeData";

function DashboardAgeModal({setAgeModal, setDataChange}) {
    const [response, setResponse] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    const onModalClose = () => {
      console.log("")
    }

    const handleModalSubmit = () => {
      if(response == "1"){
        setDataChange(ASSESSMENT_INTEREST_B)
      }else{
        setDataChange(ASSESSMENT_INTEREST)
      }
      setAgeModal(false)
      setIsModalOpen(false);
    }
    const onResponseChange = (e:ChangeEvent<HTMLInputElement>) => {
      setResponse(e.target.value);
    }

    
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      hideModalCloseBtn={true}
      className={css.modalClass}
    >
      <div className={css.modalContent}>
          <div className={css.modalClipart}>
            <SignUpClipart className={css.signUpSVG} />
          </div>
          <div className={css.homeModalCheckBox}>
            <div className={css.guidanceText}>
              <span>Let us know your age</span>
            </div>
            <div className={css.checkBoxContainer}>
                  <CheckBox
                    key={1}
                    name="agegroup"
                    id={"1"}
                    value={"1"}
                    textLabel={"14-18"}
                    onChange={(e) => onResponseChange(e)}
                  />
                  <CheckBox
                    key={2}
                    id={"2"}
                    name="agegroup"
                    value={"2"}
                    textLabel={"19-24"}
                    onChange={(e) => onResponseChange(e)}
                  />
            </div>

            <div className={css.enquireButtonContainer}>
              <Button className={css.infoBtn} onClick={handleModalSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
    </Modal>
  )
}

export default DashboardAgeModal