import axios from 'axios';
import { baseUrl } from './baseUrl';


// Regresan promesas, se debe enviar el objeto COMPLETO, no con destructuring
export const newUser = (data) => {
    return axios.post(`${baseUrl}/users/signup`, data);
}
