import axios from 'axios';

const API_URL = "https://swapi.dev/api/planets";

const getAllPlanets = () => {
    const response = axios.get(`${API_URL}`);
    return response;
};

const starWarsAPI = {
    getAllPlanets,
}

export default starWarsAPI;