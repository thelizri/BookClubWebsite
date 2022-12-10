import React from "react";
import "./ReadingListStyle.css";
//import {BookSearch} from "../BookSearch/Search";

function displayBooksCB(book){
    return (<tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.pages}</td>
    </tr>);
}

function ReadingListView(props){
    const book1 = {title:"Harry Potter",author:"Rowling",pages:500};
    const book2 = {title:"Stormlight Archive",author:"Sandersson",pages:900};
    const books = [book1, book2];

    return <div className={"container"}>
        <div><h1 id={"header24ClubPanelView"}>Reading List</h1></div>
        <table className="table table-sm bg-white table-borderless" id={"table"}>
            <thead id={"headReadingList"}>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                {/*<th><BookSearch /></th>*/}
            </tr>
            </thead>
            <tbody>
            {books.map(displayBooksCB)}
            </tbody>
        </table>
    </div>
}
export default ReadingListView;