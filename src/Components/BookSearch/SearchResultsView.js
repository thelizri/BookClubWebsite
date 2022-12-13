export const SearchResultsView = ( { foundBooks, error } ) => {
    // https://getbootstrap.com/docs/3.4/components/#list-group

    function renderListItem( book ) {
        return (
            <a className={ "list-group-item list-group-item-action h4 lead" }
               href="src/Components/BookSearch/SearchResultsView#"
               key={ book.id }><strong>{ book.volumeInfo.title }</strong></a>
        );
    }

    console.log( foundBooks )
    return (
        <div className={"list-group col-10"}>
            { foundBooks.map( renderListItem ) }
        </div>
    );
}
