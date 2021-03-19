import axios from "axios"

const client = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
})

export default client
