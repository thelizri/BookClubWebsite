import { ReadingList } from "../ReadingList/ReadingList";
import { NextMeeting } from "../NextMeeting/NextMeeting";
import {Votes} from "../Votes/Votes";
import "./ClubPanelStyle.css";
// DUMMY COMPONENTS
var BookPanel = () => <div>[Book Panel Dummy]</div>;
var VotingPanel = () => <div>[Voting Panel Dummy]</div>;
var MeetingPanel = () => <div>[Meeting Panel Dummy]</div>;

/**
 * Displays the club panel, containing the book panel, reading list, etc.
 *
 * @param {Object} props - currentClub: the current club.
 */
export default function ClubPanelView(props) {
    return (
        // https://getbootstrap.com/docs/3.4/components/#panels
        <div className="panel panel-default" id={"panel"}>
            <div className="panel-header" id={"panelhead"}>{props.currentClub.name}</div>
            <div className="panel-body" id={"panelbody"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <BookPanel/>
                        </div>
                        <div className="col-md-4">
                            <Votes />
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
