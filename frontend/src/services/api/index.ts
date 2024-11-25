import axios from "axios";

const BACKEND_BASE_URL = "http://localhost:3005";
// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";

const api = axios.create({
  baseURL: `${BACKEND_BASE_URL}`,
});

export { api };
