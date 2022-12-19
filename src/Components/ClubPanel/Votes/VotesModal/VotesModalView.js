import React from "react";
import "./VotesModalStyle.css";

function VotesModalView({
    isActive = true,
    results = [{title: "A", votes: 0}, {title: "B", votes: 1}],
}) {
    const votingResults = (
        <table>
            <thead>
                <tr>
                    <th className="col-titles">
                        Book
                    </th>
                    <th className="col-votes">
                        Votes
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map((result) => 
                        <tr key={result.title}>
                            <td className="col-9 col-titles">
                                {result.title}
                            </td>
                            <td className="col-votes">
                                {result.votes}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
    
    return (
        <div className="votes-modal">
            <button type="button"
                    className="btn btn-primary create-club-button" data-bs-toggle="modal" data-bs-target="#votes-modal">
                View Votes

            </button>
            <div className="modal fade" id="votes-modal" tabIndex="-1" role="dialog" aria-labelledby="votes-modal-label">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header head-footer-modal">
                            <h4 className="modal-title" id="votes-modal-label">Voting Results</h4>
                            <button type="button" className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                        </div>
                        <div className="modal-body row m-1">
                            { isActive ? votingResults : "The vote deadline has not been reached yet."}
                        </div>
                        <div className="modal-footer head-footer-modal">
                            <button type="button" className="btn btn-secondary close-modal" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VotesModalView;
