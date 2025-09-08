function MovieDetailsCard({ movie, className }) {
  console.log(movie)
  return (
    <div className={`card bg-neutral shadow-sm ${className}`}>
      <figure className="h-96 overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Poster"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center whitespace-normal">{movie.title}</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {movie.genres.map((genre) => (
            <div key={genre.id} className="badge badge-soft">
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
