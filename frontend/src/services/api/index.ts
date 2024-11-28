import axios from "axios";

const PORT = process.env.APPLICATION_PORT;

const BACKEND_BASE_URL = `http://localhost:${PORT}`;

const api = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export { api };
