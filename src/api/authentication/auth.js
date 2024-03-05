import { authKit } from "./base";

export const signupAction = (data) => {
    return authKit.post('api/v1/user/signup', data)
}
export const googleLogin = (data) => {
    return authKit.get('auth/google')
}
export const LoginAction = (payload) => {
  return authKit.post("api/v1/user/login", payload);
};
export const ForgetPasswordAction = (payload) => {
    return authKit.post("api/v1/user/forgotpassword", payload);
  };

