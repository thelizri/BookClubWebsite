/**
 *
 */
export default function SearchBarView(props) {
    // https://getbootstrap.com/docs/3.4/components/#input-groups
    return (
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search for books..." aria-label="Search"
                   aria-describedby="search-addon"/>
            <button type="button" className="btn btn-outline-dark">search</button>
        </div>
    );
}
