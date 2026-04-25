import config from "@/config/config";
import axios from "axios";

export async function login({ email, password }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
  return response.data;
}


export async function signUp({name, email, phone,city, province, password }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name,
    email,
    phone,
    address:{city, province},
    password,
  });
  return response.data;
}
