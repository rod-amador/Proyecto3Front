import axios from 'axios';
import { baseUrl } from './baseUrl';

axios.defaults.withCredentials = true;

// Regresan promesas, se debe enviar el objeto COMPLETO, no con destructuring
export const login = (credentials) => {
    return axios.post(`${baseUrl}/users/login`, credentials);
}

export const logout = (credentials) => {
    return axios.post(`${baseUrl}/users/logout`, credentials);
}

export const signup = (credentials) => {
    return axios.post(`${baseUrl}/users/signup`, credentials);
}