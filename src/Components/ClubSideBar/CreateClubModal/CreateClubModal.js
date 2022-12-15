import {CreateClubModalView} from "./CreateClubModalView";
import {useDispatch, useSelector} from "react-redux";
import {
    createClub, resetClubCreateStatus,
    selectClubCreationError, selectClubCreationSuccess,
    selectInvalidClubName
} from "../../../Store/slices/clubCreationSlice";
import {selectUser} from "../../../Store/slices/userSlice";
import {useEffect} from "react";


export const CreateClubModal = function() {
    const dispatch = useDispatch();
    const clubCreator = useSelector( selectUser );
    const clubCreationError = useSelector( selectClubCreationError );
    const clubCreationSuccess = useSelector( selectClubCreationSuccess );
    let invalidClubName = false;
    let mismatchingGender = false;

    switch(clubCreationError) {
        case "clubName" : invalidClubName = true;
            break;
        case "gender" : mismatchingGender = true;
            break;
    }

    useEffect(() => {
        dispatch(resetClubCreateStatus());
    }, [clubCreationSuccess])

    const validateAndCreateClub = (clubName, language, maxMemberCount, gender, unprocessedGenres, meetingType) => {
        const genres = unprocessedGenres.state.selected;
        dispatch(createClub({
            clubName,
            language,
            maxMemberCount,
            gender,
            genres,
            meetingType,
            userId: clubCreator.uid,
            userGender: clubCreator.gender}))
    }

    return <CreateClubModalView invalidClubName={invalidClubName} mismatchingGender={mismatchingGender} onSubmit={validateAndCreateClub} />
}