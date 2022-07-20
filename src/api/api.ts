import axios from "axios";

const api = axios.create({
    baseURL: "https://vetexotic.herokuapp.com/"
});

export default api;