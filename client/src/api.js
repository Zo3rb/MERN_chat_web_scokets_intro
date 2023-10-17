import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Your API's base URL
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

export default api;
