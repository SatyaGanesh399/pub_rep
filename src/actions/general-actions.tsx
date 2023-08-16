import axios from "axios";

export const getBlogData = async (blog: string) => {
  return await axios
    .get(`/blogs/${blog}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};
export const getBlogList = async () => {
  return await axios
    .get(`/bloglist`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};
export const getCareerData = async (career: string) => {
  return await axios
    .get(`/careers/${career}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getCareerList = async () => {
  return await axios
    .get(`/careerlist`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const setPaymentOrder = async (
  packageType: string,
  packageAmount: Number,
  promoCodeTitle: String,
  email: String
) => {
  return await axios
    .post(`/paymentorder?packageType=${packageType}`, {
      packageAmount: packageAmount,
      promoCodeTitle: promoCodeTitle,
      email: email
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const validateUser = async (email: string) => {
  return await axios
    .post(`/validate`, {
      email: email
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const updatePaymentInitiation = async (
  email: string,
  orderid: string,
  receiptid: string
) => {
  return await axios
    .post(`/paymentInitiate`, {
      email: email,
      orderid: orderid,
      receiptid: receiptid
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const addAsSuscriber = async (email: string) => {
  return await axios
    .post(`/subscribe`, {
      email: email
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getEventsAction = async () => {
  return await axios
    .get(`/event`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getoffervalidation = async (promo: String) => {
  //getoffervalidation
  return await axios
    .get(`/offer?promo=${promo}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const registerForEventAction = async (id: string, data:any) => {
  return await axios
    .post(`/eventregister`, {
      id: id,
      data: data
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const downloadReportAction = (reportID: string) => {
  return axios
    .get(`/userreport/${reportID}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const forgetPassswordMail = async (email: string) => {
  return await axios
    .post(`/forgetpasswordmail`, {
      email: email
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const resendVerificationMail = async (email: string) => {
  return await axios
    .post(`/resendverificationmail`, {
      email: email
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const sendContactQuery = async (
  name: string,
  email: string,
  phone: string,
  message: string,
  guidanceType: Array<any>
) => {
  return await axios
    .post(`/contactquery`, {
      name: name,
      email: email,
      phone: phone,
      message: message,
      guidanceType: guidanceType
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const sendHomeModalData = async (guidanceType: Array<any>) => {
  return await axios
    .post(`/homemodaldata`, {
      guidanceType: guidanceType
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};
