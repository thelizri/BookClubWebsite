import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    voteCounts: [],
}

export const voteCounting = createSlice({
    name: 'voteCounting',
    initialState,
    reducers: {
        countVotes : ( state, { payload } ) => {
            state.voteCounts = [];

            const readingList = payload.readingList;
            const unprocessedVotes = payload.votes;
            let votes = [];

            for(const key in unprocessedVotes) {
                votes.push(unprocessedVotes[key]);
            }

            const uniqueVotes = [...new Set(votes)];
            const newVoteCounts = [];

            uniqueVotes.forEach(uniqueVote => {
                let voteCount = 0;

                for(const vote of votes) {
                    if(vote === uniqueVote) {
                        voteCount++;
                    }
                }

                const titleOfAssociatedBook = readingList.filter(book => book.googleBooksId == uniqueVote)[0].title;

                newVoteCounts.push( { title: titleOfAssociatedBook, votes: voteCount, id: uniqueVote} )
            })

            state.voteCounts = newVoteCounts;
        }
    }
})

export const { countVotes } = voteCounting.actions;