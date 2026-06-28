function CinemaInfo({ cinema }) {

    return (

        <div className="cinema">

            <h2>Cinema</h2>

            <p><b>Name:</b> {cinema.name}</p>

            <p><b>Address:</b> {cinema.address}</p>

            <p><b>Rating:</b> {cinema.rating}</p>

        </div>

    )

}

export default CinemaInfo;