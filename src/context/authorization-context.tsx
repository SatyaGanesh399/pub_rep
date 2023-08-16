import React, { useReducer } from "react";
import { Responses } from "@src/types/responses";
import { Session } from "@src/types/session";
import { User } from "@src/types/user";

import {
  registerUserAction,
  signInUserAction,
  signOutUserAction,
  getLoggedInUserAction,
  getLocalStorageData,
  updateUserInfoAction,
  updateSessionDataAction,
  saveTestResponses,
  uploadAvatarAction,
  updateGuidedTourAction
} from "@src/actions/authorization-actions";

type AuthorizationProviderProps = {
  children: React.ReactNode;
};

const initialState: User = {
  name: "",
  email: "",
  phone: "",
  age: "",
  city: "",
  classval: "",
  school: "",
  gender: "",
  dateofbirth: "",
  fathername: "",
  mothername: "",
  package: "",
  report: "",
  avatar: "",
  journey: [],
  sessions: [],
  updatedAt: "",
  guidedtour: false,
  testResults : {}
};

export const AuthorizationContext = React.createContext({
  loggedInUser: {
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    classval: "",
    school: "",
    gender: "",
    dateofbirth: "",
    fathername: "",
    mothername: "",
    package: "",
    report: "",
    avatar: "",
    journey: [],
    sessions: [],
    updatedAt: "",
    guidedtour: false,
    testResults : {}
  },
  registerUserAction: (user: User): Promise<any> | undefined => {
    return;
  },
  signInUserAction: (user: User): Promise<any> | undefined => {
    return;
  },
  updateGuidedTourAction: (
    guidedtour: boolean,
    token: string
  ): Promise<any> | undefined => {
    return;
  },
  signOutUserAction: () => {},
  getLoggedInUserAction: (user: User, token: string): Promise<any> | undefined => {
    return;
  },
  getLocalStorageData: (): { userEmail: string; token: string } => {
    return;
  },
  updateUserInfoAction: (user: User, token: string): Promise<any> | undefined => {
    return;
  },
  updateSessionDataAction: (
    email: string,
    sessionData: Session,
    token: string
  ): Promise<any> | undefined=> {
    return;
  },
  saveTestResponses: (
    type: string,
    menuType: string,
    responses: Responses[],
    token: string,
    email: string
  ): Promise<any> | undefined => {
    return;
  },
  uploadAvatarAction: (formData: FormData, token: string): Promise<any> | undefined => {
    return;
  },
  dispatch: ({ type: string, state: User }) => {}
});

export const LOGIN = "LOGIN";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_JOURNEY = "UPDATE_USER_JOURNEY";
export const UPDATE_SESSION_DATA = "UPDATE_SESSION_DATA";
export const UPDATE_AVATAR = "UPDATE_AVATAR";
export const CLEAR_STATE = "CLEAR_STATE";

export const AuthorizationReducer = (state: User, action:any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.state.email
      };
    case UPDATE_USER:
      return {
        ...state,
        ...action.state
      };
      case UPDATE_USER_JOURNEY:
        const updatedJourney = state.journey ?? [];
        if (!updatedJourney.includes(action.state)) {
          updatedJourney.push(action.state);
        }
        return {
          ...state,
          journey: updatedJourney
        };
      case UPDATE_SESSION_DATA:
        const updatedSessions = {
          ...(state.sessions ?? {}),
          [action.state.id]: action.state
        };
        return {
          ...state,
          sessions: updatedSessions
        };
    case UPDATE_AVATAR:
      return {
        ...state,
        avatar: action.state.avatar
      };
    case CLEAR_STATE:
      return {
        ...state,
        name: "",
        email: "",
        phone: "",
        age: "",
        city: "",
        classval: "",
        school: "",
        gender: "",
        dateofbirth: "",
        fathername: "",
        mothername: "",
        package: "",
        report: "",
        avatar: "",
        journey: [],
        sessions: [],
        testEvaluation: {},
        testResponses: {},
        testResults: {},
        guidedtour: false
      };
    default:
      return state;
  }
};

export const AuthorizationProvider = ({
  children
}: AuthorizationProviderProps) => {
  const [user, dispatch] = useReducer(AuthorizationReducer, initialState);

  return (
    <AuthorizationContext.Provider
      value={{
        loggedInUser: user,
        registerUserAction: registerUserAction,
        signInUserAction: signInUserAction,
        signOutUserAction: signOutUserAction,
        updateUserInfoAction: updateUserInfoAction,
        updateSessionDataAction: updateSessionDataAction,
        getLoggedInUserAction: getLoggedInUserAction,
        getLocalStorageData: getLocalStorageData,
        saveTestResponses: saveTestResponses,
        uploadAvatarAction: uploadAvatarAction,
        updateGuidedTourAction: updateGuidedTourAction,
        dispatch: dispatch
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
