import React from "react";
import "./SummaryStyle.css";

function SummaryView(props){
    return (<div className={"container bg-white m-2"} id={"summaryViewContainer"}>
        <div className={"row"}>

            {/*Column for the book cover*/}
            <div className={"col"}>
                <img src={require("../../Images/example-book-cover.jpg")} className={"img-fluid"} alt={"Image Missing"} id={"imageSummary"}/>
            </div>

            {/*Column for the circular progress bar and the title/author*/}
            <div className={"col"}>test</div>

            {/*How many pages you need to read*/}
            <div className={"col"}>test</div>
        </div>
        <div className="progress m-3">
            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                 aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                70%
            </div>
        </div>
    </div>);
}
export default SummaryView;