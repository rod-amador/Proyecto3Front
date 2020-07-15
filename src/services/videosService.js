import axios from "axios"
import { baseUrl } from "./baseUrl";

// cambiar ruta poniendo la dirección donde estará el verdadero backend

export const getVideos = ()=>{
    return axios.get(`${baseUrl}/videos`);
}