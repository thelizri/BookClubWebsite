import "./SearchResultsStyle.css";

export const SearchResultsView = ( {
                                       foundBooks,
                                       onSubmit = () => {},
                                       error
                                   } ) => {
    // https://getbootstrap.com/docs/3.4/components/#list-group

    function renderListItem( book ) {
        return (
            <a className={ "list-group-item list-group-item-action h4 lead" }
               onClick={ () => onSubmit( book.id, book.volumeInfo.title,
                   book.volumeInfo?.authors[ 0 ], book.volumeInfo?.pageCount ) }
               href="#"
               key={ book.id }
               data-bs-dismiss="modal"
               id={ "searchResultsList" }>{ book.volumeInfo.title }
            </a>
        );
    }

    return (
        <div className={ "list-group col-10" }>
            { foundBooks.map( renderListItem ) }
        </div>
    );
}