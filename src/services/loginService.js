import axios from 'axios';
import { baseUrl } from './baseUrl';

axios.defaults.withCredentials = true;

// Regresan promesas, se debe enviar el objeto COMPLETO, no con destructuring
export const login = (data) => {
    return axios.post(`${baseUrl}/users/login`, data);
}

export const logout = () => {
    return axios.post(`${baseUrl}/users/logout`);
}