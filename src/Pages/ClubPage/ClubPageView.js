// DUMMY PRESENTERS
var NavigationBar = (props) => {
    const NavigationBarView = require("../../Components/NavigationBar/NavigationBarView").default;
    
    return <NavigationBarView/>;
};
var ClubSideBar = (props) => {
    const ClubSideBarView = require("../../Components/ClubSideBar/ClubSideBarView").default;
    
    return <ClubSideBarView/>
};
var ClubPanel = (props) => {
    const ClubPanelView = require("../../Components/ClubPanel/ClubPanelView").default;
    
    return <ClubPanelView clubName={props.clubName}/>;
};

/**
 * The view for the club page.
 *
 * @param {Object} props - none.
 */
export default function ClubPageView(props) {
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
                        <ClubPanel clubName="Club Name"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
