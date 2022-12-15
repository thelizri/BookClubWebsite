const ClubSearchResultsView = ({
   foundClubs,
   onSubmit = (club) => {console.log(club)},
   error,
}) => {
    function renderListItem(club) {
        return (
            <li
                className="list-group-item list-group-item-action h4 lead"
                href="#"
                onClick={ () => onSubmit(club) }
                eventKey={ club.id }
                id={ club.id }
            > {
                club.clubName
            } </li>
        );
    }

    return (
        <ul className="list-group"> {
            foundClubs.map(renderListItem)
        } </ul>
    );
}

export default ClubSearchResultsView;
