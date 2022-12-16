import React from "react";
import "./NextMeetingStyle.css";

const NextMeetingView = function( {
                                      isAdmin, meetingAddress,
                                      meetingDate, meetingTime,
                                      meetingDescription, isOnline,
                                      onlineOrPhysical, newDescription,
                                      newAddress, newTime,
                                      newDate } ) {

    const onSwitch = ( event ) => {
        onlineOrPhysical( event.target.value );
    }
    const descriptionInput = event => {
        if(event.key === 'Enter') {
            event.preventDefault()
            newDescription( event.target.textContent );
        }
    }
    const addressInput = event => {
        if(event.key === 'Enter') {
            event.preventDefault()
            newAddress( event.target.textContent )
        }
    };
    const dateInput = event => {
        if(event.key === 'Enter') {
            event.preventDefault()
            newDate( event.target.textContent )
        }
    };

    const timeInput = event => {
        if(event.key === 'Enter') {
            event.preventDefault()
            newTime( event.target.textContent )
        }
    };

    function radioOrText(isAdmin){
        if(!isAdmin){
            return (<td className={ "text-muted" }>physical</td>);
        }
        return(<td>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioTypeMeetingPhysical"
                       value="physical" onChange={onSwitch}/>
                <label className="form-check-label" htmlFor="inlineRadioTypeMeetingPhysical1">Physical</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioTypeMeetingOnline"
                       value="online" onChange={onSwitch}/>
                <label className="form-check-label" htmlFor="inlineRadioTypeMeetingOnline1">Online</label>
            </div>
        </td>);
    }


    return ( <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Next Meeting</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headNextMeeting" }>
            <tr>
                <th><span>Meeting</span><span contentEditable={isAdmin} id={"meetingNumber"}></span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Type</td>
            </tr>
            <tr>
                {radioOrText(isAdmin)}
            </tr>
            <tr>
                <td>Time & Date</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={isAdmin} onKeyDown={dateInput}>{ meetingDate }</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={isAdmin} onKeyDown={timeInput}>{ meetingTime }</td>
            </tr>
            <tr>
                <td>{isOnline ? 'Link' : 'Location'}</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={isAdmin} onKeyDown={descriptionInput}>{ meetingDescription }</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={isAdmin} onKeyDown={addressInput}>{ meetingAddress }</td>
            </tr>
            </tbody>
        </table>
    </div> );
}

export default NextMeetingView;