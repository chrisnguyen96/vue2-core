import axios from 'axios';

// create an axios instance
export default ({ requiresAuth = false } = {}) => {
    const options: any = {};
    options.baseURL = process.env.API_URL;

    //? Decide add token or not
    if (requiresAuth) {
        options.headers.Authorization = 'JWT TOKEN'
    }
    const instance = axios.create(options);
    return instance;
};