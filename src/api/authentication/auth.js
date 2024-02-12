import axios from 'axios'
import {authKit} from './base'

export const signupAction = (data) => {
    return authKit.post('api/v1/user/signup', data)
}
export const googleLogin = (data) => {
    return authKit.get('auth/google')
}




