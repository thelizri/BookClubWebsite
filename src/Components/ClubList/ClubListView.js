/**
 * Displays a list of clubs.
 *
 * @param {Object} props -
 *      clubs: a list of clubs
 *      currentClub: the currently selected club
 *      setCurrentClub: callback for setting the currently selected club
 */
export default function ClubListView(props) {
    // https://getbootstrap.com/docs/3.4/components/#list-group-linked
    function renderListItem(club) {
        return (
            <a href="#" key={club}
                className={
                    `list-group-item${
                        club === props.currentClub ? " active" : ""
                    }`
                }
                onClick={() => props.setCurrentClub(club)}
            >
                {club}
            </a>
        );
    }
    
    return (
        <div className="list-group">
            {
                props.clubs.map(renderListItem)
            }
        </div>
    );
}
