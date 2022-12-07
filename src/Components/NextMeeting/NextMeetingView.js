import React from "react";
import "./NextMeetingStyle.css";

function NextMeetingView(props){
    return (<div className={"container"}>
        <div><h1>Next Meeting</h1></div>
        <table className="table table-sm table-striped">
            <thead id={"headNextMeeting"}>
            <tr>
                <th>Meeting #{props.number}</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Type</td></tr>
                <tr><td className={"text-muted"}>{props.type}</td></tr>
                <tr><td>Time & Date</td></tr>
                <tr><td className={"text-muted"}>{props.timedate}</td></tr>
                <tr><td>Location</td></tr>
                <tr><td className={"text-muted"}>{props.place}</td></tr>
                <tr><td className={"text-muted"}>{props.address}</td></tr>
            </tbody>
        </table>
    </div>);
}
export default NextMeetingView;