import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

export const authKit = axios.create({
  baseURL: isProduction
    ? process.env.NEXT_PUBLIC_API_URL_PROD // production
    : process.env.NEXT_PUBLIC_API_URL_DEV, // development
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authKit2 = axios.create({
  baseURL: isProduction
    ? process.env.NEXT_PUBLIC_API_URL_PROD // production
    : process.env.NEXT_PUBLIC_API_URL_DEV, // development
  timeout: 50000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});