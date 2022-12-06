export default function SearchBarView() {
    return (
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                   aria-describedby="search-addon"/>
            <button type="button" className="btn btn-outline-dark">search</button>
        </div>
    );
}