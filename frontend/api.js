import axios from 'axios';

const url = "http://localhost:8216";

const addData = (data) => axios.post(`${url}/api/v1/user/signup`, data);
const getData = (data) => axios.post(`${url}/api/v1/user/login`, data);

export {addData,getData};