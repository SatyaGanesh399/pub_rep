import axios from "axios";
import { Responses } from "@src/types/responses";
import { Session } from "@src/types/session";
import { User } from "@src/types/user";

export const registerUserAction = async (user: User) => {
  return await axios.post("/register", {
    name: user.name,
    phone: user.phone,
    email: user.email,
    password: user.password
  });
};

export const signInUserAction = (user: User): Promise<any> => {
  return axios
    .post("/signin", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("_token", res.data.token);
      localStorage.setItem("_user", user.email);
      return user;
    })
    .catch(err => Promise.reject(err));
};

export const getLoggedInUserAction = (user: User, token: string) => {
  return axios
    .get(`/user?email=${user.email}`, {
      headers: { Authorization: `JWT ${token}` }
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updateUserInfoAction = (user: User, token: string) => {
  return axios
    .post(`/update`, user, {
      headers: { Authorization: `JWT ${token}` }
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updateUserPassword = (password: string, email: string) => {
  return axios
    .put(`/updatepassword`, {
      password: password,
      email: email
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const saveTestResponses = (
  type: string,
  menuType: string,
  responses: Responses[],
  token: string,
  email: string
) => {
  return axios
    .post(
      `/updateResponses`,
      {
        type: type,
        menuType: menuType,
        responses: responses,
        email: email
      },
      {
        headers: { Authorization: `JWT ${token}` }
      }
    )
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updateSessionDataAction = (
  email: string,
  sessionData: any,
  token: string
) => {
  sessionData["email"] = email;
  return axios
    .post(`/session`, sessionData, {
      headers: { Authorization: `JWT ${token}` }
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getLocalStorageData = (): { userEmail: string; token: string } => {
  return {
    userEmail: localStorage.getItem("_user") || "",
    token: localStorage.getItem("_token") || ""
  };
};

export const signOutUserAction = async () => {
  localStorage.removeItem("_token");
  localStorage.removeItem("_user");
  await axios.get(`/signout`);
};

export const uploadAvatarAction = (formData: FormData, token: string) => {
  return axios
    .post(`/upload`, formData, {
      headers: { Authorization: `JWT ${token}` }
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updateGuidedTourAction = (guidedtour: boolean, token: string) => {
  return axios
    .put(
      `/updateguidedtour`,
      { guidedtour: guidedtour },
      {
        headers: { Authorization: `JWT ${token}` }
      }
    )
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};
