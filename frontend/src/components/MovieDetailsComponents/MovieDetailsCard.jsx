function MovieDetailsCard({movie}) {
    
    return (
        <div className="card bg-neutral w-96 shadow-sm">
        <figure>
            <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title justify-center">{movie.title}</h2>
            {movie.genres.map((genre) => (
                <div key={genre.id} className="badge badge-soft bg-black">{genre.name}</div>
            ))}
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    )
}

export default MovieDetailsCard