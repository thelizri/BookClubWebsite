import ReadingListView from "./ReadingListView";
import * as React from "react";
import {useGetSearchResultsQuery} from "../../Store/api/apiSlice";
import {useSelector} from "react-redux";
import {selectReadingList} from "../../Store/slices/club";

export const ReadingList = () => {
    // State of query
    const [ searchQuery, setSearchQuery ] = React.useState( "Harry Potter" );
    const readingList = useSelector(selectReadingList);

    return <ReadingListView readingList={readingList} />;
};