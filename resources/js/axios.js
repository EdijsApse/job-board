import Axios from "axios";

const instance = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        accept: "application/json",
    },
});

export default instance;
