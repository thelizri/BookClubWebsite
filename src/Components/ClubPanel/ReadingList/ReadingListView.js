import React from "react";
import "./ReadingListStyle.css";
import SearchModalView from "./SearchModal/SearchModalView";

//import {BookSearch} from "../BookSearch/Search";

function displayBooksCB( book, index ) {
    return ( <tr key={index}>
        <td key={index+"FirstColumn"}>
            <div className="form-check ms-2" key={index+"FirstColumnDiv"}>
                <input className="form-check-input" type="radio" key={index+"FirstColumnInput"}
                       name="flexRadioDefault" id={ book.id }/>
            </div>
        </td>
        <td key={index+"SecondColumn"}>{ book.title }</td>
        <td key={index+"ThirdColumn"}>{ book.author }</td>
        <td key={index+"FourthColumn"}>{ book.pageCount }</td>
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