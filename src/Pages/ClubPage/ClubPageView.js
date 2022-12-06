import NavigationBarView from "../../Components/NavigationBar/NavigationBarView";
import ClubSideBarView from "../../Components/ClubSideBar/ClubSideBarView";
import ClubPanelView from "../../Components/ClubPanel/ClubPanelView";

/**
 * The view for the club page.
 *
 * @param {Object} props -
 *      clubs: a list of user clubs
 *      currentClub: the currently selected club
 *      setCurrentClub: callback for setting the current user club
 */
export default function ClubPageView(props) {
    return (
        <div>
            <NavigationBarView/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ClubSideBarView
                            clubs={props.clubs}
                            currentClub={props.currentClub}
                            setCurrentClub={props.setCurrentClub}
                        />
                    </div>
                    <div className="col-md-9">
                        <ClubPanelView currentClub={props.currentClub}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
