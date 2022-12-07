export const SearchResultsView = ( { foundBooks, error } ) => {
    // https://getbootstrap.com/docs/3.4/components/#list-group
    
    function renderListItem(book) {
        return (
            <li className="list-group-item"><a href="#" key={book}>{book.title}</a></li>
        );
    }
    
    return (
        <div>
            <ul className="list-group">{foundBooks.map(renderListItem)}</ul>
        </div>
    );
}
