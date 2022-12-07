import {NavigationBar} from "../../Components/NavigationBar/NavigationBar";
import {ClubSideBar} from "../../Components/ClubSideBar/ClubSideBar";
import ClubPanelView from "../../Components/ClubPanel/ClubPanelView";

/**
 * The view for the club page.
 *
 * @param {Object} props - none.
 */
export const ClubPage = function() {
    return (
        <div>
            <NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ClubSideBar/>
                    </div>
                    <div className="col-md-9">
                        { /* CLUB NAME DUMMY */ }
                        <ClubPanelView clubName="Club Name"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
