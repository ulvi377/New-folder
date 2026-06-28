function MovieCard({ movie, onClick }) {

    return (

        <div className="card" onClick={onClick}>

            <img src={movie.image} alt="" />

            <h4>{movie.name}</h4>

            <p>⭐ {movie.imdb}</p>

        </div>

    )

}

export default MovieCard;