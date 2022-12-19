import "./ClubPanelStyle.css";
import { NextMeeting } from "./NextMeeting/NextMeeting";
import { ReadingList } from "./ReadingList/ReadingList";
import { Summary } from "./SummaryCard/Summary";
import { Votes } from "./Votes/Votes";

/**
 * Displays the club panel, containing the book panel, reading list, etc.
 *
 * @param {Object} props - currentClub: the current club.
 */
const ClubPanelView = function ( { clubName } ) {
    return (
        // https://getbootstrap.com/docs/3.4/components/#panels
        <div className="panel panel-default" id={ "panel" }>
            <div className="panel-header"><h1
                id={ "panelhead" }>{ clubName }</h1></div>
            <div className="panel-body" id={ "panelbody" }>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Summary/>
                        </div>
                        <div className="col-md-4">
                            <Votes/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <ReadingList/>
                        </div>
                        <div className="col-md-4">
                            <NextMeeting/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClubPanelView;