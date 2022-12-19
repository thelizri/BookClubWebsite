import React from "react";
import "./ReadingListStyle.css";
import SearchModalView from "./SearchModal/SearchModalView";

const ReadingListView = function( { currentVote, readingList = [], handleVote} ) {
    function displayBooksCB( book, index ) {
        function submitVote(event) {
            handleVote(event.target.id);
        }

        return ( <tr key={index}>
            <td>
                <div className="form-check ms-2" >
                    <input className="form-check-input" type="radio"
                           name="flexRadioDefault" id={ book.googleBooksId }
                           onClick={submitVote}
                           onChange={()=>{}}
                           checked={currentVote === book.googleBooksId}
                    />
                </div>
            </td>
            <td>{ book.title }</td>
            <td>{ book.author }</td>
            <td>{ book.pageCount }</td>
        </tr> );
    }

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