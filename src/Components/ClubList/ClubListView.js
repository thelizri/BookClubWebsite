/**
 * Displays a list of clubs.
 *
 * @param {Object} props - clubs: a list of clubs to display.
 */
export default function ClubListView(props) {
    return (
        // https://getbootstrap.com/docs/3.4/components/#list-group-linked
        <div className="list-group">
            {
                props.clubs.map(club =>
                    <a href="#" className="list-group-item" key={club}>
                        {club}
                    </a>)
            }
        </div>
    );
}
