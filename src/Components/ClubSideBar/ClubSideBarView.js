import ClubListView from "../ClubList/ClubListView";
import { SearchBarView } from "../SearchBar/SearchBarView";

/**
 * Displays the club page sidebar - a list of user clubs and a club search bar.
 *
 * @param {Object} props -
 *      clubs: a list of user clubs
 *      currentClub: the currently selected club
 *      setCurrentClub: callback for setting the current user club
 */
export default function ClubSideBarView(props) {
    // https://getbootstrap.com/docs/3.4/components/#panels
    return (
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">My Clubs</div>
                <div className="panel-body">
                    <ClubListView
                        clubs={props.clubs}
                        currentClub={props.currentClub}
                        setCurrentClub={props.setCurrentClub}
                    />
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">Find Clubs</div>
                <div className="panel-body">
                    <SearchBarView/>
                </div>
            </div>
        </div>
    );
}
