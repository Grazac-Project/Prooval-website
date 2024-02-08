import axios from 'axios'
import {authKit} from './base'

export const SignupAction = (data) => {
    return authKit.post('api/v1/user/signup', data)
}
export const LoginAction = (data) => {
    return authKit.post('api/v1/user/login', data)
}



