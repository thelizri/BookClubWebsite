/**
 * Search bar component
 *
 * @param {function} setSearchText - callback that receives a search text parameter.
 * @param {function} onSubmit - callback that initiates the search.
 */
export default function SearchBarView({
    setSearchText,
    onSubmit
}) {
    // https://getbootstrap.com/docs/3.4/components/#input-groups
    return (
        <div className="input-group">
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(event) => setSearchText(event.target.value)}
            />
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={onSubmit}
            >
                Search
            </button>
        </div>
    );
}
