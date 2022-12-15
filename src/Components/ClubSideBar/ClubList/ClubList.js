

export const ClubList = function() {
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
}