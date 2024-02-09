import { authKit } from "./base";

export const SignupAction = (data) => {
  return authKit.post("api/v1/user/signup", data);
};
export const LoginAction = (payload) => {
  return authKit.post("api/v1/user/login", payload);
};
export const ForgetPasswordAction = (payload) => {
    return authKit.post("api/v1/user/forgotpassword", payload);
  };

