import "./SearchResultsStyle.css";
import {useRef} from "react";

export const SearchResultsView = ( { foundBooks, onSubmit = () => {}, error } ) => {
    // https://getbootstrap.com/docs/3.4/components/#list-group

    function renderListItem( book ) {
        return (
            <a className={ "list-group-item list-group-item-action h4 lead" }
               onClick={() => onSubmit(book.id, book.volumeInfo.title, book.volumeInfo?.authors[0], book.volumeInfo?.pageCount)} value={ book.id } href="#"
               key={ book.id } id={"searchResultsList"}>{ book.volumeInfo.title }</a>
        );
    }

    console.log( foundBooks )
    return (
        <div className={"list-group col-10"}>
            { foundBooks.map( renderListItem ) }
        </div>
    );
}