import axios from 'axios';
const API_URL = "http://jsonplaceholder.typicode.com/" //use .env fiel to store URLs

export default axios.create({
  baseURL: API_URL
});