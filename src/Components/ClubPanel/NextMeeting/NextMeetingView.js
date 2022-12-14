import React from "react";
import "./NextMeetingStyle.css";

function NextMeetingView( props ) {
    // let currentDate = new Date().toJSON().slice( 0, 10 );
    // console.log( currentDate ); // "2022-06-17"

    return ( <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Next Meeting</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headNextMeeting" }>
            <tr>
                <th>Meeting #23</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Type</td>
            </tr>
            <tr>
                <td className={ "text-muted" }>physical</td>
            </tr>
            <tr>
                <td>Time & Date</td>
            </tr>
            <tr>
                <td className={ "text-muted" }>2022/06/26 15:00</td>
            </tr>
            <tr>
                <td>Location</td>
            </tr>
            <tr>
                <td className={ "text-muted" }>Cafe blåbär</td>
            </tr>
            <tr>
                <td className={ "text-muted" }>Fleminggatan 53, 112 32
                    Stockholm
                </td>
            </tr>
            </tbody>
        </table>
    </div> );
}

export default NextMeetingView;