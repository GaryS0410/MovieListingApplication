import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components that make up the MovieDetailsPage 
import MovieDetailsCard from "../components/MovieDetailsComponents/MovieDetailsCard";
import MovieDetailsDescription from "../components/MovieDetailsComponents/MovieDescription";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [ movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/api/specific/${movieId}`)
                setMovieDetails(response.data);
            } catch (error) {
                console.log("Error fetching movie details", error);
            }

        }
        fetchAPI();
    }, []);

        // Conditional rendering to prevent the error
    if (!movieDetails) {
        return <div className="min-h-screen">Loading....</div>;
    }

    console.log(movieDetails);

    return <div className="min-h-screen">
        <div className="flex w-1/2">
            <MovieDetailsCard movie={movieDetails} />
            <MovieDetailsDescription movie={movieDetails} />
        </div>
    </div>
};

export default MovieDetailsPage;