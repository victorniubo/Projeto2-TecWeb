import axios from 'axios'

const apint = axios.create({
    baseURL: 'http://localhost:3000/'
});

export default apint;