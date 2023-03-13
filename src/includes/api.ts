import axios from "axios";

axios.defaults.baseURL = "http://localhost";
axios.defaults.withCredentials = true;

export default axios;
