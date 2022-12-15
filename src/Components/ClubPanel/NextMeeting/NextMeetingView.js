import React from "react";
import "./NextMeetingStyle.css";
import Form from "react-bootstrap/Form";

function NextMeetingView( props ) {
    // let currentDate = new Date().toJSON().slice( 0, 10 );
    // console.log( currentDate ); // "2022-06-17"

    return ( <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Next Meeting</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headNextMeeting" }>
            <tr>
                <th contentEditable={props.isAdmin}>Meeting #23</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Type</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin}>physical</td>
            </tr>
            <tr>
                <td>Time & Date</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin}>2022/06/26 15:00</td>
            </tr>
            <tr>
                <td>Location</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin}>Cafe blåbär</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin}>Fleminggatan 53, 112 32
                    Stockholm
                </td>
            </tr>
            </tbody>
        </table>
    </div> );
}

export default NextMeetingView;