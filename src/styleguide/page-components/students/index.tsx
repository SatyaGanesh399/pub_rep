import React, { useState, useEffect } from "react";
import addToast, {Toaster} from 'react-hot-toast'
import {
  setPaymentOrder,
  validateUser,
  updatePaymentInitiation,
  getoffervalidation
} from "@src/actions/general-actions";
import { updateOfferCount } from "@src/actions/admin-actions";

import { packageType } from "@src/types/packageType";

import StudentsFaqs from "./students-faqs";
import StudentsHero from "./students-hero";
import StudentsSteps from "./students-steps";
import StudentsPacks from "./students-packs";
import StudentsModal from "./students-modal";
import StudentsTestimonialsSection from "./students-testimonials";

const loadScript = (src: string) => {
  return new Promise(resolve => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const displayPaymentBridge = (
  email: string,
  packageType: packageType,
  packageAmount: Number,
  promoCodeTitle: String,
  setSuccessModalVisibility: Function,
  setPromocode: Function,
) => {
  validateUser(email).then(async res => {
    
    if (res.status) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        addToast.error("Payment module failed to load. Are you online?");
        return;
      }
      const data = await setPaymentOrder(
        packageType,
        packageAmount,
        promoCodeTitle,
        email
      );

      updatePaymentInitiation(email, data.id, data.receipt)
        .then(() => {
          const options = {
            key: process.env.PAYMENT_PORTAL_KEY_ID,
            currency: data.currency,

            amount: data.amount,
            order_id: data.id,
            name: "Pro Garten",
            image: "/assets/images/logo.png",
            handler: async res => {
              if (
                res.razorpay_payment_id != "undefined" ||
                res.razorpay_payment_id > 1
              ) {
                if (promoCodeTitle != "None") {
                  const data = await getoffervalidation(promoCodeTitle);
                  updateOfferCount(data[0].title, data[0].count)
                    .then(() => setPromocode("None"))
                    .catch(err => Promise.reject(err));
                }
              }
              return setSuccessModalVisibility(true);
            },

            prefill: {
              email: email
            },
            theme: {
              color: "#f58862"
            }
          };

          const _window = window as any;
          const paymentObject = new _window.Razorpay(options);
          paymentObject.open();
        })
        .catch(err => {
          addToast.error("Payment not intiated. Try in sometime.")
        });
    } else {
      addToast.error("Email provided in not registered")
    }
  });
};

const StudentsPage = () => {
  const [packageType, setPackageType] = useState<packageType>();
  const [isInputModalVisible, setInputModalVisibility] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisibility] = useState(false);
  const [packageAmount, setPackageAmount] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoCodeTitle, setPromocode] = useState("None");
  const [isPromoCodeAppliedState, setPromoState] = useState(false);

  console.log("discpunt", discountAmount)
  console.log("discpuntitle", promoCodeTitle)


  const getPackageType = (packageType: packageType) => {
    setPackageType(packageType);
    setInputModalVisibility(true);
    if (packageType === "COUNSELLING1") {
      setPackageAmount(process.env.COUNSELLING_PACKAGE_PRICE1);
    } else if (packageType === "COUNSELLING2") {
      setPackageAmount(process.env.COUNSELLING_PACKAGE_PRICE2);
    } else if (packageType === "BASIC") {
      setPackageAmount(process.env.BASIC_PACKAGE_PRICE);
    } else if (packageType === "INTERMEDIATE") {
      setPackageAmount(process.env.INTERMEDIATE_PACKAGE_PRICE);
    } else if (packageType === "ADVANCED") {
      setPackageAmount(process.env.ADVANCED_PACKAGE_PRICE);
    }
  };

  const packageAmountPairs = {"none" : 0, null : 0, "basic" : 199, "intermediate" : 2999, "advanced" : 4999}
  const packagesCheck = {"basic" : "BASIC", "intermediate" : "INTERMEDIATE", "advanced" : "ADVANCED"}


  const getValidEmail = (email: string | boolean) => {
    setInputModalVisibility(false);
    setDiscountAmount(0);
    setPromoState(false);
    if (email !== false) {
      validateUser(email as string).then(async res => {
        console.log("res", res)
        if(res.status){
          let amountToPay = Number(packageAmount) - packageAmountPairs[res.package]
          amountToPay = discountAmount == 0 ? amountToPay : Number(packageAmount)
          console.log("check", promoCodeTitle)
          if(promoCodeTitle == "None"){
            console.log("confirmation", packageAmount, packageAmountPairs[res.package], discountAmount)
            if(amountToPay > 0){
            displayPaymentBridge(
              email as string,
              packageType,
              amountToPay,
              promoCodeTitle,
              setSuccessModalVisibility,
              setPromocode
            )}else if(amountToPay == 0 || packagesCheck[res.package] == packageType){
              addToast.error("Sorry! You cannot buy the same package again.");
            }else{
              addToast.error("Sorry! This package is not applicable");
            }
          }else{
            displayPaymentBridge(
              email as string,
              packageType,
              amountToPay,
              promoCodeTitle,
              setSuccessModalVisibility,
              setPromocode
            )
          }
        }else{
          addToast.error("Email you entered is not registered!");
        }
      }).catch(error => {
        addToast.error("Error occured. Try again later");
      })
    }
  };

  return (
    <>
      <Toaster />
      <StudentsHero />
      <StudentsSteps />
      <StudentsPacks getPackageType={getPackageType} />
      <StudentsFaqs />
      <StudentsTestimonialsSection />
      <StudentsModal
        modalBtnText="Checkout"
        modalClipartType={"input"}
        modalText="Enter Registered Email"
        isModalOpen={isInputModalVisible}
        onModalClose={getValidEmail}
        showCloseBtn={false}
        packageAmount={packageAmount}
        setPackageAmount={setPackageAmount}
        discountAmount={discountAmount}
        setDiscountAmount={setDiscountAmount}
        setPromocode={setPromocode}
        setPromoState={setPromoState}
        isPromoCodeAppliedState={isPromoCodeAppliedState}
      />
      <StudentsModal
        modalBtnText="Close"
        modalClipartType={"done"}
        modalText="Payment Successful. Proceed to Sign In."
        isModalOpen={isSuccessModalVisible}
        onModalClose={() => setSuccessModalVisibility(false)}
        showCloseBtn={true}
      />
    </>
  );
};

export default StudentsPage;
