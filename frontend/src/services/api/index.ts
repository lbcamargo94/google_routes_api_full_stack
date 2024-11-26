import axios from "axios";

const BACKEND_BASE_URL = "http://localhost:3005";

const api = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export { api };

// const googleApi = axios.create({
//   baseURL: "https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=",
// });

// export { googleApi };
