import axios from "axios"
import { CONFIG } from "../config"

export const axiosClient = axios.create({
    baseURL: CONFIG.SERVER_URL
});
