import axios from "axios"
import { baseUrl } from "./baseUrl";

// cambiar ruta poniendo la dirección donde estará el verdadero backend

export const getBooks = ()=>{
    return axios.get(`${baseUrl}/books`);
}