import axios from 'axios'


const authKit = axios.create({
    baseURL: 'https://hack-d-jobs-production.up.railway.app/',
    timeout: 50000,
    headers: {
        "Content-Type": 'application/json'
    }
})