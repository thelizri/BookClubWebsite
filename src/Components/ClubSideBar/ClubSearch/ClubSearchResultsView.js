import ListGroup from 'react-bootstrap/ListGroup';

const ClubSearchResultsView = ({
   foundClubs,
   onSubmit = (club) => {console.log(club)},
   error,
}) => {
    function renderListItem(club) {
        return (
            <ListGroup.Item
                className={ "list-group-item list-group-item-action h4 lead" }
                action onClick={ () => onSubmit(club) }
                eventKey={ club.id }
                id={ club.id }
            > {
                club.clubName
            } </ListGroup.Item>
        );
    }

    return (
        <ListGroup>
            { foundClubs.map( renderListItem ) }
        </ListGroup>
    );
}

export default ClubSearchResultsView;
