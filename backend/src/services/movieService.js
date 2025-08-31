import axios from "axios";

export const getPopularMovies = async (req, res) => {
    try {
        let API_KEY = process.env.API_KEY;
        let MOVIE_DB_BASE_URL = process.env.MOVIE_DB_BASE_URL;

        const response = await axios.get(`${MOVIE_DB_BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
            }
        });
        return response.data
    } catch (error) {
        console.error('Error fetching popular movies:', error.message);
    };
}

export const getSpecificMovie = async (movieId) => {
    try {
        let API_KEY = process.env.API_KEY;
        let MOVIE_DB_BASE_URL = process.env.MOVIE_DB_BASE_URL;

        const response = await axios.get(`${MOVIE_DB_BASE_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            }
        });
        return response.data
    }
    catch (error) {
        console.error('Error fetching specific movie:', error.message)
    };
}