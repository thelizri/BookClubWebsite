import React from "react";
import "./VotesStyle.css";

function VotesView(props){
    return (<div className={"container"} id={"container"}>
        <div><h1>Votes</h1></div>
        <table className="table table-sm table-striped bg-white" id={"table"}>
            <thead id={"headNextMeeting"}>
            <tr>
                <th>Member</th>
                <th>Progress</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>);
}
export default VotesView;