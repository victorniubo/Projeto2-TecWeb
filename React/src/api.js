import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.bitcointrade.com.br/v3/public/'
});

export default api;