import { authKit } from "./base";
import axios from "axios";


// let token = "";
// let userId = 0;
// try {
//   let details = sessionStorage.getItem("user_details");
//   token = JSON.parse(details).token;
//   userId = JSON.parse(details).id;
// } catch (err) {
//   //err
// }
export let cancel;


export const signupAction = (data) => {
    return authKit.post('api/v1/user/signup', data)
}
export const googleLogin = (data) => {
    return authKit.get('auth/google')
}
export const loginAction = (payload) => {
  return authKit.post("api/v1/user/login", payload);
};
export const forgetPasswordAction = (payload) => {
    return authKit.post("api/v1/user/forgotpassword", payload);
};
export const addRole = (payload, token) => {
    return authKit.post(`api/v1/user/addrole?token=${token}`, payload);
};
export const resetPasswordAction = (payload, token) => {
    return authKit.post(`api/v1/user/resetpassword?token=${token}`, payload);
};
export const newsLetterSub = (data) => {
  return authKit.post('api/v1/user/news', data)
}
export const faqForm = (data) => {
  return authKit.post('api/v1/user/faqform', data)
}
export const fetchMentors = (data, page) => {
  return authKit.get(`api/v1/mentors/searchAll?query=${data}&page=${page}`, {
    cancelToken: new axios.CancelToken(c => cancel = c)
  })
}
export const hireTalent = (data) => {
  return authKit.post('api/v1/hire/add', data)
}
export const preferredMentors = (userId, mentorId) => {
  return authKit.patch(`api/v1/user/preferred/${userId}/${mentorId}`);
};
export const removePreferredMentors = (userId, mentorId) => {
  return authKit.patch(`api/v1/user/nonPreferred/${userId}/${mentorId}`);
};
export const getPreferredMentors = (userId) => {
  return authKit.get(`api/v1/user/mentor/${userId}`);
};

export const bookMentorSession = (userId) => {
  return authKit.put(`/api/v1/user/mentorSession/${userId}`)
}
export const getAvailableBookings = (userId) => {
  return authKit.get(`api/v1/mentors/available/${userId}`)
}
export const BookingsSubmitAction = (data) => {
  return authKit.post(`api/v1/book/book-session`, data)
}


