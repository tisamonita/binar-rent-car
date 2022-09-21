//middleware for login, register and logout
//using Axios for http request
//using localstorage to save JWT (token)

import axios from 'axios';
//api url menyesuaikan
const API_URL = "https://bootcamp-rent-car.herokuapp.com/customer/";

const register = (email, password) => {
    return axios.post(`${API_URL}auth/register`, {
        email,
        password
    })
}

const login = (email, password) => {
    return axios.post(`${API_URL}auth/login`, {
        email,
        password
    })
    .then((res) => {
        if(res.data.access_token){
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data
    });
};

const logout = () => {
    localStorage.removeItem("user")
};

const authAPI = {
    register,
    login, 
    logout,
};

export default authAPI;


