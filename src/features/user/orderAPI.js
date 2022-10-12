import axios from 'axios';
import {getAuthHeader} from '../auth/authAPI';

const API_URL = "https://bootcamp-rent-car.herokuapp.com/";

const orderRentCar = (start_rent_at, finish_rent_at, car_id) => {
    return axios.post(`${API_URL}customer/order/`, {
        start_rent_at,
        finish_rent_at,
        car_id
    } ,{headers : getAuthHeader()})
}

// 1. frontend
// 1. backend

const deleteRentCar = () => {

}

const getAllOrders = () =>{

}

const getOrderById = () => {

}

const updateOrder = () => {

}

const orderRentAPI = {
    orderRentCar,
    deleteRentCar,
    getAllOrders,
    getOrderById,
    updateOrder
}

export default orderRentAPI;