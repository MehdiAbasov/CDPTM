import axios from "axios"
import i18n from "../i18n/i18n"

const api = axios.create({
    baseURL: "http://localhost:5000/api"
})



export default api