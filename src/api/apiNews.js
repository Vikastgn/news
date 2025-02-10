import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_URL
console.log("API Key:", API_KEY);
export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            headers: {
                'Authorization': `${API_KEY}` // Используйте заголовок Authorization, если это требуется
            }

        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
