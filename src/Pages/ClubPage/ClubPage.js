import ClubPageView from "./ClubPageView";

const CLUBS_DUMMY = [
    {name: "Club A"},
    {name: "Club B"},
    {name: "Club C"}
];
const CURRENT_CLUB_DUMMY = CLUBS_DUMMY[0];
const SET_CURRENT_CLUB_DUMMY = (club) => console.log({setCurrentClub: club});

export default function ClubPage(props) {
    return (
        <ClubPageView
            clubs={CLUBS_DUMMY}
            currentClub={CURRENT_CLUB_DUMMY}
            setCurrentClub={SET_CURRENT_CLUB_DUMMY}
        />
    );
}
