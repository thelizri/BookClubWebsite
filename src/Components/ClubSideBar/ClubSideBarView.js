// DUMMY PRESENTERS
var ClubList = (props) => {
    const ClubListView = require("../../Components/ClubList/ClubListView").default;
    
    return <ClubListView clubs={["Club A", "Club B", "Club C"]}/>
};
var SearchBar = (props) => {
    const SearchBarView = require("../../Components/SearchBar/SearchBarView").default;
    
    return <SearchBarView/>
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
                <div class="panel-heading">My Clubs</div>
                <div class="panel-body">
                    <ClubList/>
                </div>
            </div>
            <div className="panel panel-default">
                <div class="panel-heading">Find Clubs</div>
                <div class="panel-body">
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}
