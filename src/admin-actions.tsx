import { Event } from "@src/types/event";
import { Offer } from "@src/types/offer";
import axios from "axios";

export const getAllUsersAction = () => {
  return axios
    .get(`/users?secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getAllSubscribersAction = () => {
  return axios
    .get(`/subscribers?secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const evaluate = ({ email }:{email:string}) => {
  return axios
    .post(`/evaluate?email=${email}&secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updatepackage = ({ email, packageType }: {email : string, packageType : any}) => {
  return axios
    .post(`/updatepackage?secret=${process.env.ADMIN_PASSWORD}`, {
      email: email,
      package: packageType
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const removejourney = ({ email, journey }: {email : string, journey : any}) => {
  return axios
    .post(`/removejourney?secret=${process.env.ADMIN_PASSWORD}`, {
      email: email,
      journey: journey
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getEventsParticipantsAction = () => {
  return axios
    .get(`/eventregistrations?secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const addEventAction = (data: Event) => {
  return axios
    .post(`/event?secret=${process.env.ADMIN_PASSWORD}`, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getOfferAction = () => {
  return axios
    .get(`/offerregistrations?secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const addOfferAction = (data: Offer) => {
  return axios
    .post(`/offer?secret=${process.env.ADMIN_PASSWORD}`, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const deleteOfferAction = (id: string) => {
  return axios
    .delete(`/offer/${id}/?secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updateOfferCount = (promoCodeTitle: String, count: Number) => {
  return axios
    .put(`/offer?secret=${process.env.ADMIN_PASSWORD}`, {
      promoCodeTitle: promoCodeTitle,
      count: count
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const deleteEventAction = (id: string) => {
  return axios
    .delete(`/event/${id}/?secret=${process.env.ADMIN_PASSWORD}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updateEventAction = (status: string, id: string) => {
  return axios
    .put(`/event?secret=${process.env.ADMIN_PASSWORD}`, {
      id,
      status
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const uploadReportAction = (formData: FormData) => {
  return axios
    .post(`/upload?secret=${process.env.ADMIN_PASSWORD}`, formData)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};
