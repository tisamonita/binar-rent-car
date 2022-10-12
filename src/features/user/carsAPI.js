import axios from 'axios';
import {getAuthHeader} from '../auth/accessTokenHeader';

const API_URL = "https://bootcamp-rent-car.herokuapp.com/admin/";

const getAllCars = () => {
    const response = axios.get(`${API_URL}car`, getAuthHeader());
    console.log(response);
    if(response.status!==200){}
    return response;
};

// const getCarById = () => {

// }

const carsAPI = {
    getAllCars,
    // getCarById
}

export default carsAPI