function MovieDetailsDescription({movie, className}) {
    return (
        <div className={`card bg-neutral shadow-sm ${className}`}>
            <div className="card-body">
                <h2 className="card-title">Description</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailsDescription