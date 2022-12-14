/**
 * Search bar component
 *
 * @param {function} setSearchText - callback that receives a search text
 *     parameter.
 * @param {function} onSubmit - callback that initiates the search.
 */
export const SearchBarView = function( { inputQuery, onSubmit } ) {
    const handleSubmit = ( e ) => {
        onSubmit();
        e.preventDefault();
    }

    const handleKeyDown = ( e ) => {
        if( e.key === 'Enter' ) {
            onSubmit();
            e.preventDefault();
        }
    };

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
                onKeyDown={ handleKeyDown }
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