import { Link } from "react-router-dom";
 
function MovieCard({ movie }) {
    return (
        <div className="card bg-neutral w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.description}</p>
                <div className="card-actions">
                    <Link to={`/movieDetails/${movie.id}`} className="btn">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard