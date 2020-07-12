
import axios from 'axios';
import { baseUrl } from './baseUrl';

export const getUsers = () => {
    return axios.get(`${baseUrl}/users`);
}