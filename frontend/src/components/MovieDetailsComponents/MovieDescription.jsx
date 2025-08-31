function MovieDetailsDescription({movie}) {
    return (
        <div className="card bg-neutral w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Description</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailsDescription