import axios from "axios";


export const axiosInstance = axios.create({
baseURL: "https://chat-app-2-ocj8.onrender.com/api",
withCredentials: true, // we can send cookies with each time
});
