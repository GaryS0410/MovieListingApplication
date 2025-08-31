function MovieDetailsCard({ movie }) {
  return (
    <div className="card bg-neutral w-96 shadow-sm">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{movie.title}</h2>
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <div key={genre.id} className="badge badge-soft">
              {genre.name}
            </div>
          ))}
        </div>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-1"
              className="rating-hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="2 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="5 star"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
