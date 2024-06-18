import axios from "axios"

const baseUrl = "https://api.escuelajs.co/api/v1"

const getProdutData = () => {
    const response = axios.get(`${baseUrl}/products`)
    return response
}

export {getProdutData}