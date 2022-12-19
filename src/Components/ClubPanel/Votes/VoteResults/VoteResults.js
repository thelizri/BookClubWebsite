import {useDispatch, useSelector} from "react-redux";
import VoteResultsView from "./VoteResultsView";
import {selectVotesAndReadingListReady} from "../../../../Store/slices/clubSlice";
import {useEffect} from "react";
import {countVotes} from "../../../../Store/slices/voteCountingSlice";

const VoteResults = function () {
    const dispatch = useDispatch();
    const votes = useSelector( state => state.club.votes );
    const readingList = useSelector( state => state.club.readingList );
    const voteCounts = useSelector( state => state.voteCounting.voteCounts );

    useEffect(() => {
        if(readingList && votes) dispatch(countVotes( { votes, readingList } ));
    }, [readingList, votes ])


    return <VoteResultsView voteCounts={voteCounts}/>
}

export default VoteResults;