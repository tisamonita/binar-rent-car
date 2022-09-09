//middleware for login, register and logout
//using Axios for http request
//using localstorage to save JWT (token)

import axios from 'axios';
//api url menyesuaikan
const API_URL = "http://localhost:8000/";

const register = (email, password) => {
    return axios.post(`${API_URL}auth/register`, {
        email,
        password,
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


//for check condition user, login or not
export function getAuthHeader(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.access_token){
        return {Authorization :  `Bearer ${user.access_token}` }
    }
    else{
        return {};
    }
}