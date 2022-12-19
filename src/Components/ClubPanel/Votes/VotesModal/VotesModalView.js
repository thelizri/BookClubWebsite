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
                        <tr>
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#votes-modal">
                View votes
            </button>
            <div className="modal fade" id="votes-modal" tabindex="-1" role="dialog" aria-labelledby="votes-modal-label">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="votes-modal-label">Voting Results</h4>
                        </div>
                        <div class="modal-body row m-1">
                            { isActive ? votingResults : "The vote deadline has not been reached yet."}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VotesModalView;
