import {useRef} from "react";

/**
 * Search bar component
 *
 * @param {function} setSearchText - callback that receives a search text
 *     parameter.
 * @param {function} onSubmit - callback that initiates the search.
 */
export const SearchBarView = function({
    onSubmit = () => console.log("search")
}) {

    const inputtedQuery = useRef();

    const handleSubmit = ( e ) => {
        onSubmit(inputtedQuery.current.value);
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
                ref={inputtedQuery}
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