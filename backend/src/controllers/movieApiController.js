import { getPopularMovies } from "../services/movieService.js";

export const getPopularMoviesController = async (req, res) => {
    try{
        const movies = await getPopularMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error("Error in movie controller:", error.message);
        res.status(500).json({ message: "Failed to fetch popular movies" });
    };
}