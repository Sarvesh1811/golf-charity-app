import axios from "axios";

const API = axios.create({
  baseURL: "https://golf-charity-app-3zbm.onrender.com/api",
});

export default API; 