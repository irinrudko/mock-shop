import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://fakerapi.it/api/v1/',
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    // withCredentials: true,
})
