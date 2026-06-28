function Navbar({ search, setSearch }) {

    return (

        <input
            type="text"
            placeholder="Film axtar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

    )

}

export default Navbar;