import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const http = {
  get: axios.get,
  put: axios.post,
  delete: axios.delete,
  post: axios.post,
};

export default http;
