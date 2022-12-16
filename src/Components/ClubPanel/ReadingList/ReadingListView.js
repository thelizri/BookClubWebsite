import React from "react";
import "./ReadingListStyle.css";
import SearchModalView from "./SearchModal/SearchModalView";

function displayBooksCB( book, index ) {
    return ( <tr key={index}>
        <td>
            <div className="form-check ms-2" >
                <input className="form-check-input" type="radio"
                       name="flexRadioDefault" id={ book.id }/>
            </div>
        </td>
        <td>{ book.title }</td>
        <td>{ book.author }</td>
        <td>{ book.pageCount }</td>
    </tr> );
}

const ReadingListView = function( { readingList = [] } ) {
    return <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Reading List</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "tableReadingList" }>
            <thead id={ "headReadingList" }>
            <tr>
                <th>Vote</th>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                {<th><SearchModalView/></th>}
            </tr>
            </thead>
            <tbody id={"bodyReadingList"}>
            { readingList.map( displayBooksCB) }
            </tbody>
        </table>
    </div>
}
export default ReadingListView;