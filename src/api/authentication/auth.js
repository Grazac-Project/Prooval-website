import axios from 'axios'
import {authKit} from './base'

export const SignupAction = (data) => {
    return authKit.post('api/v1/user/signup', data)
}




