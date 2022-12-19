function VotesModalView({
    isActive = true,
    results = [{title: "A", votes: 0}, {title: "B", votes: 1}],
}) {
    const votingResults = (
        <table>
            <thead>
                <tr>
                    <th>
                        Book
                    </th>
                    <th>
                        Votes
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map((result) => 
                        <tr key={result.title}>
                            <td>
                                {result.title}
                            </td>
                            <td>
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
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#votes-modal">
                View votes
            </button>
            <div className="modal fade" id="votes-modal" tabIndex="-1" role="dialog" aria-labelledby="votes-modal-label">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="votes-modal-label">Voting Results</h4>
                        </div>
                        <div className="modal-body row m-1">
                            { isActive ? votingResults : "The vote deadline has not been reached yet."}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VotesModalView;
