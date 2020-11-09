import axios from 'axios'

const apint = axios.create({
    baseURL: 'http://localhost:3003/'
});

export default apint;