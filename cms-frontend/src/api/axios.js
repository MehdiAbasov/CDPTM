import axios from "axios"
import i18n from "../i18n/i18n"

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})



export default api