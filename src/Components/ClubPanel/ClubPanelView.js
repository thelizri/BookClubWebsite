// DUMMY COMPONENTS
var BookPanel = () => <div>[Book Panel Dummy]</div>;
var ReadingListPanel = () => <div>[Reading List Panel Dummy]</div>;
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
        <div className="panel panel-default">
            <div className="panel-header">{props.currentClub.name}</div>
            <div className="panel-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <BookPanel/>
                        </div>
                        <div className="col-md-3">
                            <VotingPanel/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ReadingListPanel/>
                        </div>
                        <div className="col-md-3">
                            <MeetingPanel/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
