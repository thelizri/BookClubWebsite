import * as React from "react";
import { useSelector } from "react-redux";
import { selectReadingList } from "../../../Store/slices/clubSlice";
import ReadingListView from "./ReadingListView";

export const ReadingList = () => {
    // State of query
    const readingList = useSelector( selectReadingList );

    return <ReadingListView readingList={ readingList }/>;
};