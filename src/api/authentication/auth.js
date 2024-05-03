import { authKit } from "./base";


// let token = "";
// let userId = 0;
// try {
//   let details = sessionStorage.getItem("user_details");
//   token = JSON.parse(details).token;
//   userId = JSON.parse(details).id;
// } catch (err) {
//   //err
// }

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
  return authKit.post('api/v1/user/zoho', data)
}
export const faqForm = (data) => {
  return authKit.post('api/v1/user/faqform', data)
}
export const fetchMentors = (data) => {
  return authKit.get(`api/v1/mentors/searchAll?query=${data}`)
}
export const hireTalent = (data) => {
  return authKit.post('api/v1/hire/add', data)
}
