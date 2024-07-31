import axios from "axios";

export const axiosPerson = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
