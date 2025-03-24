import axios from 'axios'


export const authKit = axios.create({
    // baseURL: 'https://hack-d-jobs-production.up.railway.app/',
    // baseURL: 'https://hackthejobs-staging-staging.up.railway.app/',
    baseURL: 'https://hack-d-jobs-z4id.onrender.com/',
    timeout: 50000,
    headers: {
        "Content-Type": 'application/json'
    }
})
export const authKit2 = axios.create({
    // baseURL: 'https://hack-d-jobs-production.up.railway.app/',
    baseURL: 'https://hack-d-jobs.onrender.com/',
    // baseURL: 'https://grazac-academy-back-end-ej7s.onrender.com/',
    timeout: 50000,
    headers: {
        "Content-Type": 'application/json'
    }
})