import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = () => axios.get(`${API_URL}/products`).then(({ data }) => data);
