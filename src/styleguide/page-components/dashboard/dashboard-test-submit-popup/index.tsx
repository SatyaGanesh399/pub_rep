import React from "react";
import DashboardMessageModal from "../dashboard-message-modal";

type TestSubmitPopupProps = {
  testSubmitMode: "timed" | "done" | "interest" | null;
  setTestSubmitMode: Function;
  isModalVisible: boolean;
  setModalVisibility: Function;
  setNextTest: Function;
  checkIsInterestTest:Function;
};

const DashboardTestSubmitPopup = ({
  testSubmitMode,
  setTestSubmitMode,
  isModalVisible,
  setModalVisibility,
  setNextTest,
  checkIsInterestTest
}: TestSubmitPopupProps) => {
  switch (testSubmitMode) {
    case "timed":
      return (
        <DashboardMessageModal
          modalBtnText="Next Test"
          modalClipartType={"timed"}
          modalText="Time's Up !!!!"
          isModalOpen={isModalVisible}
          onModalClose={() => {
            setModalVisibility(false);
            setTestSubmitMode(null);
            setNextTest();
            checkIsInterestTest(false);
          }}
        />
      );
    case "done":
      return (
        <DashboardMessageModal
          modalBtnText="Next Test"
          modalClipartType={"done"}
          modalText="Test submitted successfully"
          isModalOpen={isModalVisible}
          onModalClose={() => {
            setModalVisibility(false);
            setTestSubmitMode(null);
            setNextTest();
            checkIsInterestTest(false);
          }}
        />
      );
      case "interest":
      return (
        <DashboardMessageModal
          modalBtnText="See Results"
          modalClipartType={"done"}
          modalText="Test submitted successfully"
          isModalOpen={isModalVisible}
          onModalClose={() => {
            setModalVisibility(false);
            setTestSubmitMode(null);
            setNextTest();
            checkIsInterestTest(true);
          }}
        />
      );
    default:
      return null;
  }
};

export default DashboardTestSubmitPopup;
