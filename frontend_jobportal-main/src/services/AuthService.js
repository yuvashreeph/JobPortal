import axios from 'axios';

const AUTH_API_URL = 'http://localhost:8080/api/auth/login';

export const loginUser = async (credentials) => {
    return await axios.post(`${AUTH_API_URL}`, credentials);
};