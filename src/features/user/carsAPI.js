import axios from 'axios';
import {getAuthHeader} from '../auth/authAPI';

const API_URL = "http://localhost:3000/";

const getAllCars = () => {
    return axios.get(`${API_URL}cars`);
};

// const getCarById = () => {

// }

// -> buat Kumpulan API
// ->SLICE : Reducer dan action yang menjadi 1
// -> slice didaftarkan di store.js

const carsAPI = {
    getAllCars,
    // getCarById
}

export default carsAPI