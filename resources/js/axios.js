import Axios from "axios";

const instance = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: import.meta.env.DEV === true ? 0 : 10000,
    headers: {
        accept: "application/json",
    },
});

export default instance;
