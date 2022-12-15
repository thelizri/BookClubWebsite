import ListGroup from 'react-bootstrap/ListGroup';

const EXAMPLE_ITEMS = [
    <div> {"<div>"} </div>,
    <a href="#"> {"<a>"} </a>,
    <button> {"<button>"} </button>,
];

/**
 * This is a general search result view component.
 * The idea is to have a single view for array rendering results
 * which are arbitrary items displayed in a list.
 *
 * These items, which are passed as an array to the props for this view,
 * have their own implementation for rendering whatever it may be.
 *
 * https://react-bootstrap.github.io/components/list-group
 *
 * @param items {any} - search results.
 */
function SearchResultsView({
    items = EXAMPLE_ITEMS,
}) {   
    // https://react-bootstrap.github.io/components/list-group/#list-group-props
    return (
        <ListGroup> {
            items.map(renderItem)
        } </ListGroup>
    );
}

// https://react-bootstrap.github.io/components/list-group/#list-group-item-props
function renderItem(item) {
    return (
        <ListGroup.Item> {
            item
        } </ListGroup.Item>
    );
}

export default SearchResultsView;
