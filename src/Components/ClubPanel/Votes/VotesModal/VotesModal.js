import {useDispatch, useSelector} from "react-redux";
import {selectVotesAndReadingListReady} from "../../../../Store/slices/clubSlice";
import {useEffect} from "react";
import {countVotes} from "../../../../Store/slices/voteCountingSlice";
import VotesModalView from "./VotesModalView";
import {selectCurrentlyReadingId} from "../../../../Store/slices/meetingSlice";

const VotesModal = function () {
    const dispatch = useDispatch();
    const votes = useSelector( state => state.club.votes );
    const readingList = useSelector( state => state.club.readingList );
    const voteCounts = useSelector( state => state.voteCounting.voteCounts );
    const voteDeadlinePassed = useSelector( selectCurrentlyReadingId );

    useEffect(() => {
        if(readingList && votes) dispatch(countVotes( { votes, readingList } ));
    }, [readingList, votes ])

    return <VotesModalView isActive={voteDeadlinePassed} results={voteCounts} />

}

export default VotesModal;