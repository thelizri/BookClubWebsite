import React from "react";
import "./ReadingListStyle.css";
import SearchModalView from "./SearchModal/SearchModalView";

//import {BookSearch} from "../BookSearch/Search";

function displayBooksCB( book ) {
    return ( <tr>
        <td>
            <div className="form-check">
                <input className="form-check-input" type="radio"
                       name="flexRadioDefault" id={ book.isbn }/>
            </div>
        </td>
        <td>{ book.title }</td>
        <td>{ book.author }</td>
        <td>{ book.pageCount }</td>
    </tr> );
}

const ReadingListView = function( { readingList = [] } ) {
    const book1 = {
        title : "Harry Potter",
        author : "Rowling",
        pages : 500,
        isbn : "9780747542155"
    };
    const book2 = {
        title : "Stormlight Archive",
        author : "Sandersson",
        pages : 900,
        isbn : "9780575097360"
    };
    const books = [ book1, book2 ];

    return <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Reading List</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headReadingList" }>
            <tr>
                <th>Vote</th>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                { <th><SearchModalView/></th> }
            </tr>
            </thead>
            <tbody id={ "bodyReadingList" }>
            { readingList.map( displayBooksCB ) }
            </tbody>
        </table>
    </div>
}
export default ReadingListView;