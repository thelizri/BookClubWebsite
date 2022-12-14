import "./ClubListStyle.css"

/**
 * Displays a list of clubs.
 *
 * @param {Object} props -
 *      clubs: a list of clubs
 *      currentClub: the currently selected club
 *      setCurrentClub: callback for setting the currently selected club
 */
export default function ClubListView( props ) {
    // https://getbootstrap.com/docs/3.4/components/#list-group-linked
    function renderListItem( club ) {
        return (
            <a href="#" key={ club.name }
               className={ "list-group-item list-group-item-action" }
               onClick={ () => props.setCurrentClub( club ) }
            >
                { club.name }
            </a>
        );
    }

    return (
        <div className="list-group" id={ "listForClubs" }>
            {
                props.clubs.map( renderListItem )
            }
        </div>
    );
}
