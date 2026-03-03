import axios from "axios"
import i18n from "../i18n/i18n"

const api = axios.create({
    baseURL: import.meta.env.VİTE_API_URL
})



export default api