import ClubPanelView from "./ClubPanelView";

const CLUB_DUMMY = {
    name : "Club Name"
};

export const ClubPanel = () => {
    return (
        <ClubPanelView currentClub={ CLUB_DUMMY }/>
    );
}