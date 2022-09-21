import axios from 'axios';

const API_URL = "https://swapi.dev/api/";

//karakteristik api starwars : 
// total : 60 data hasil count.
// planets : mengambil  1-10
// "/planets/?page=2" => data 11 - 20
// 21-30 : "/planets/?page=3"

// first & skip misal total data 50
// '/api/20/10 ::  data ke 11 -30 
// '

const getAllPlanets = (page) => {
    const response = axios.get(`${API_URL}planets/?page=${page}`);
    return response;
};

//getAllFilms
//getFilmById

const starWarsAPI = {
    getAllPlanets,
}

export default starWarsAPI;