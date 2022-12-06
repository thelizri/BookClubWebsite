// DUMMY PRESENTERS
var ClubList = (props) => {
    const ClubListView = require("../../Components/ClubList/ClubListView").default;
    
    return <ClubListView
        clubs={["Club A", "Club B", "Club C"]}
        currentClub="Club A"
        setCurrentClub={(club) => console.log(club)}
    />;
};
var SearchBar = (props) => {
    const SearchBarView = require("../../Components/SearchBar/SearchBarView").default;
    
    return <SearchBarView/>;
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
