import { API_URL } from "constants/Constants"

export const getImageURL = (url) => {
    return `${API_URL}${url}`
}