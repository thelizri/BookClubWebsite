import SearchBar from "../SearchBar/SearchBar";

// DUMMY PRESENTERS
var ClubList = (props) => {
    const ClubListView = require("../ClubList/ClubListView").default;
    const CURRENT_CLUB = {name: "Club A"};
    
    return <ClubListView
        clubs={[
            CURRENT_CLUB,
            {name: "Club B"}
        ]}
        currentClub={CURRENT_CLUB}
        setCurrentClub={(club) => console.log("setCurrentClub", club)}
    />;
};

/**
 * Displays a list of user clubs and a club search bar.
 *
 * @param {Object} props - none.
 */
export default function ClubSideBarView(props) {
    return (
        // https://getbootstrap.com/docs/3.4/components/#panels
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">My Clubs</div>
                <div className="panel-body">
                    <ClubList/>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">Find Clubs</div>
                <div className="panel-body">
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}
