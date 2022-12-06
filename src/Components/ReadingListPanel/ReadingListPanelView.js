import BookSearchView from "../BookSearch/BookSearchView";

/**
 *
 */
export default function ReadingListPanelView() {
    return (
        <div>
            <h3>Reading List</h3>
            <div className="panel panel-default">
                <div className="row panel-header">
                    <div className="col-md-6 offset-6">
                        <BookSearchView/>
                    </div>
                </div>
                <div className="panel-body">
                    [Reading List]
                </div>
            </div>
        </div>
    );
};
