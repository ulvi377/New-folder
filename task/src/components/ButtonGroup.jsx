function ButtonGroup({ movie }) {

    function openTrailer() {
        window.open(movie.trailer, "_blank");
    }

    function showDetails() {
        alert(`
Film: ${movie.name}
Director: ${movie.director}
IMDb: ${movie.imdb}
Year: ${movie.year}
        `);
    }

    function buyTicket() {
        alert(`🎟️ ${movie.name} filmi üçün bilet sifarişi uğurla edildi!`);
    }

    return (
        <div className="buttons">
            <button onClick={openTrailer}>Trailer</button>
            <button onClick={showDetails}>Details</button>
            <button onClick={buyTicket}>Ticket</button>
        </div>
    );
}

export default ButtonGroup;