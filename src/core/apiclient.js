import axios  from "axios";
const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:4280/api'
    : '/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    }
  });
export default instance;