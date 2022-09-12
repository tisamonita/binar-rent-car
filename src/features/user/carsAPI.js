import axios from 'axios';
import {getAuthHeader} from '../auth/authAPI';

const API_URL = "https://bootcamp-rent-car.herokuapp.com/admin/";

const getAllCars = () => {
    const response = axios.get(`${API_URL}car`);
    console.log(response);
    return response;
};

// const getCarById = () => {

// }

const carsAPI = {
    getAllCars,
    // getCarById
}

export default carsAPI