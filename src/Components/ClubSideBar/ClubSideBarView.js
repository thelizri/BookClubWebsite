import { SearchBar } from "../SearchBar/SearchBar";
import "./ClubSidebarStyle.css"
import CreateClubModalView from "./CreateClubModal/CreateClubModalView";

// DUMMY PRESENTERS
var ClubList = ( props ) => {
    const ClubListView = require( "./ClubList/ClubListView" ).default;
    const CURRENT_CLUB = { name : "Club A" };

    return <ClubListView
        clubs={ [
            CURRENT_CLUB,
            { name : "Club B" }
        ] }
        currentClub={ CURRENT_CLUB }
        setCurrentClub={ ( club ) => console.log( "setCurrentClub", club ) }
    />;
};

/**
 * Displays a list of user clubs and a club search bar.
 *
 * @param {Object} props - none.
 */
export default function ClubSideBarView( props ) {
    return (
        // https://getbootstrap.com/docs/3.4/components/#panels
        <div>
            <div className="panel panel-default mt-5 mb-2" id={ "sidebartop" }>
                <div className="panel-heading"><h1>My Clubs</h1></div>
                <div className="panel-body">
                    <ClubList/>
                </div>
            </div>
            <CreateClubModalView/>
            <div className="panel panel-default mt-2" id={ "sidebarbottom" }>
                <div className="panel-heading"><h1>Find Clubs</h1></div>
                <div className="panel-body">
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}
