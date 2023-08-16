import React, { useState, useContext, useEffect } from "react";
import addToast from 'react-hot-toast'
import classNames from "classnames";
import {
  AuthorizationContext,
  UPDATE_SESSION_DATA
} from "@context/authorization-context";

import { Session } from "@src/types/session";
import Calendar from "@styleguide/components/calendar";
import Button from "@styleguide/components/button";
import A from "@styleguide/components/a";

import css from "./index.module.scss";

import {
  IconCalendar,
  IconClock,
  IconAddress,
  IconMode,
  IconLeft,
  IconRight
} from "@icons/index";

import { CONTACT_ADDRESS } from "@lib/constants";
import {
  getLocalStorageData,
  updateSessionDataAction
} from "@src/actions/authorization-actions";

const DashboardSessionSection = () => {
  const {
    loggedInUser: { sessions, email, name },
    dispatch
  } = useContext(AuthorizationContext);

  const [activeSessionIndex, setActiveSessionIndex] = useState(0);
  const [sessionData, setSessionData] = useState<Session>(
    sessions[activeSessionIndex]
  );
  const timeSlots = [
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm"
  ];

  useEffect(() => {
    setSessionData(sessions[activeSessionIndex]);
  }, [activeSessionIndex]);

  useEffect(() => {
    if (sessionData.sessionStatus === "booked") {
      activeSessionIndex + 1 !== sessions.length
        ? setActiveSessionIndex(activeSessionIndex + 1)
        : "";
    }
  }, [sessionData]);

  const updateSessionData = (data: Session) => {
    setSessionData({
      ...sessionData,
      ...data
    });
  };

  const bookSession = () => {
    if (sessionData.sessionTime === "") {
      addToast.error("Please select a slot!")
    } else {
      const { token } = getLocalStorageData();
      const sessionDataToBeSaved: Session = {
        ...sessionData,
        name: name,
        sessionStatus: "booked",
        sessionLocation: `Pro Garten, ${CONTACT_ADDRESS}`,
        sessionDate:
          sessionData.sessionDate === ""
            ? new Date().toString()
            : sessionData.sessionDate
      };
      updateSessionDataAction(email, sessionDataToBeSaved, token)
        .then(res => {
          updateSessionData(sessionDataToBeSaved);
          dispatch({
            type: UPDATE_SESSION_DATA,
            state: sessionDataToBeSaved
          });
          addToast.success(`Your session-0${sessionDataToBeSaved.id +
            1} has been booked successfully. Please check your mail for all the details.`,);
        })
        .catch(error => {
          addToast.error(error.response.data)
        });
    }
  };

  return (
    <>
      <span className={css.sessionText}>{`Session-${activeSessionIndex +
        1}`}</span>
      <div className={css.sessionContainer}>
        <IconLeft
          className={classNames(
            css.navigationIcon,
            css.navigationLeftIcon,
            activeSessionIndex === 0 ? css.navigationHideIcon : ""
          )}
          size={"2x"}
          width="0"
          onClick={() => setActiveSessionIndex(activeSessionIndex - 1)}
        />
        <IconRight
          className={classNames(
            css.navigationIcon,
            css.navigationRightIcon,
            sessions.length === activeSessionIndex + 1
              ? css.navigationHideIcon
              : ""
          )}
          onClick={() => setActiveSessionIndex(activeSessionIndex + 1)}
          size={"2x"}
          width="0"
        />
        <div className={css.sessionBlocks}>
          {sessions.map((session, index) => (
            <Button
              className={classNames(
                css.sessionBlockBtn,
                activeSessionIndex === index ? css.activeSessionBlockBtn : ""
              )}
              key={`session_btn_${index}`}
              onClick={() => setActiveSessionIndex(index)}
            >{`session-${index + 1}`}</Button>
          ))}
        </div>
        {sessionData.sessionStatus === "na" ? (
          <>
            <div className={css.dateTimeContainer}>
              <div className={css.dateContainer}>
                <div className={css.dateContainerHeader}>
                  <IconCalendar
                    className={css.sessionIcon}
                    size={"2x"}
                    width="0"
                  />
                  <span className={css.containerHeaderText}>Date</span>
                </div>
                <div className={css.datePicker}>
                  <Calendar
                    activeDate={
                      sessionData.sessionDate !== ""
                        ? new Date(sessionData.sessionDate)
                        : new Date()
                    }
                    emitSelectedDate={(date: string) => {
                      updateSessionData({
                        sessionDate: date.toString()
                      });
                    }}
                  />
                </div>
              </div>
              <div className={css.timeContainer}>
                <div className={css.timeContainerHeader}>
                  <IconClock
                    className={css.sessionIcon}
                    size={"2x"}
                    width="0"
                  />
                  <span className={css.containerHeaderText}>Pick a time</span>
                </div>
                <div className={css.timeBlocks}>
                  {timeSlots.map((time, index) => (
                    <Button
                      className={classNames(
                        css.timeBlockBtn,
                        time === sessionData.sessionTime
                          ? css.activeTimeBlockBtn
                          : ""
                      )}
                      key={`time_btn_${index}`}
                      onClick={() =>
                        updateSessionData({
                          sessionTime: time
                        })
                      }
                    >{`${time}`}</Button>
                  ))}
                </div>
                <span className={css.slotsText}>Slots available</span>
              </div>
            </div>
            <div className={css.modeContainer}>
              <div className={css.modeContainerHeader}>
                <IconMode className={css.sessionIcon} size={"2x"} width="0" />
                <span className={css.containerHeaderText}>Mode</span>
              </div>
              <div className={css.modeBlocks}>
                <Button
                  className={classNames(
                    css.modeBlockBtn,
                    sessionData.sessionType === "online"
                      ? css.activeModeBlockBtn
                      : ""
                  )}
                  onClick={() =>
                    updateSessionData({
                      sessionType: "online"
                    })
                  }
                >
                  Online
                </Button>
                <Button
                  className={classNames(
                    css.modeBlockBtn,
                    sessionData.sessionType === "offline"
                      ? css.activeModeBlockBtn
                      : ""
                  )}
                  onClick={() =>
                    updateSessionData({
                      sessionType: "offline"
                    })
                  }
                >
                  Offline
                </Button>
              </div>
              {sessionData.sessionType === "online" ? (
                <>
                  <div className={css.modeText}>
                    Please join this meeting on your selected time slot.
                  </div>
                  <A
                    link={process.env.SESSION_LINK}
                    className={css.modeTextLink}
                  >
                    {process.env.SESSION_LINK}
                  </A>
                  <div className={css.modeText}>
                    Password - {process.env.SESSION_PASSWORD}
                  </div>
                </>
              ) : (
                <div className={css.modeText}>
                  Please reach office at your selected time.
                </div>
              )}
            </div>
            {sessionData.sessionType === "offline" ? (
              <div className={css.addressContainer}>
                <div className={css.addressContainerHeader}>
                  <IconAddress
                    className={css.sessionIcon}
                    size={"2x"}
                    width="0"
                  />
                  <span className={css.containerHeaderText}>Address</span>
                </div>
                <div className={css.addressText}>
                  <div className={css.modeText}>Pro Garten</div>
                  <div className={css.modeText}>{CONTACT_ADDRESS}</div>
                  <A
                    link={"http://www.progarten.in/"}
                    className={css.modeTextLink}
                  >
                    http://www.progarten.in/
                  </A>
                </div>
              </div>
            ) : null}
            <Button className={css.submitBtn} onClick={bookSession}>
              Submit
            </Button>
          </>
        ) : (
          <div className={css.bookedText}>
            All sessions have been booked. Please contact support team to book
            more sessions.
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardSessionSection;
