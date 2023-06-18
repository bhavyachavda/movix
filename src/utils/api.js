import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const BASE_URL = "05a5c0e7465ec5d6d22a96f1f673eee4";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};


export const fetchDataFromApi = async (url,params) => {
    try {
       const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
       });
       console.log(data.results);
       return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}