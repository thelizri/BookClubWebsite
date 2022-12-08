import ClubPanelView from "./ClubPanelView";

const CLUB_DUMMY = {
    name: "Club Name"
};

const ClubPanel = () => {
    return (
        <ClubPanelView currentClub={CLUB_DUMMY}/>
    );
}

export default ClubPanel;
