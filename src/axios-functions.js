import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-iwd-sandbox.cloudfunctions.net",
});

export default instance;
