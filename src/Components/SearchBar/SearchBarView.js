/**
 *
 */
export default function SearchBarView(props) {
    // https://getbootstrap.com/docs/3.4/components/#input-groups
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for books..."></input>
        </div>
    );
}
