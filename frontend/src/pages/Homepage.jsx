import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "../components/MovieCard";


const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api/popular");
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return <div className="min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
};

export default HomePage;