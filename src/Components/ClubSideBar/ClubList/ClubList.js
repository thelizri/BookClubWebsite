import ClubListView from "./ClubListView";

const CLUB_DUMMY = {
    //clubs : [],
    clubId : 1,
    //clubOwnerId : "irsPW5zlE4SPq5KwvnT3Snq10w63",
    clubName : "KTH deckarklubb",
    //currentlyReadingId : null,
    genres : [ "Western", "Mystery" ],
    language : "Korean",
    maxMemberCount : 3,
    //meetings : [],
    meetingType : "Physical",
    memberIds : [ "irsPW5zlE4SPq5KwvnT3Snq10w63",
        "cdWAiHj65ya8M5JdTQJguZYouZU2" ],
    //readingList : [],
    //voteDeadline : null,
    //votes : [],
}

function ClubList() {
    return (
        <ClubListView
            clubs={[CLUB_DUMMY]}
            currentClub={CLUB_DUMMY}
            setCurrentClub={(club) => console.log("setCurrentClub", club)}
        />
    );
}

export default ClubList;