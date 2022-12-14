import { ClubPanel } from "../../Components/ClubPanel/ClubPanel";
import { ClubSideBar } from "../../Components/ClubSideBar/ClubSideBar";
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";

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
                        <ClubPanel/>
                    </div>
                </div>
            </div>
        </div>
    );
}
