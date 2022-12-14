/**
 * Search bar component
 *
 * @param {function} setSearchText - callback that receives a search text
 *     parameter.
 * @param {function} onSubmit - callback that initiates the search.
 */
export const SearchBarView = function( { inputQuery, onSubmit } ) {
    function handleSubmit( e ) {
        onSubmit();
        e.preventDefault();
    }

    // https://getbootstrap.com/docs/3.4/components/#input-groups
    return (
        <div className="input-group">
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={ ( event ) => inputQuery( event.target.value ) }
            />
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={ handleSubmit }
            >
                Search
            </button>
        </div>
    );
}