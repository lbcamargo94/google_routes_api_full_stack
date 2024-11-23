import axios from "axios";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const apiInstance = axios.create({
  baseURL: `${API_URL}${API_KEY}`,
});

export { apiInstance };
