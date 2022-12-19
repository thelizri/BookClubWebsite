import * as React from "react";
import { useSelector } from "react-redux";
import { useGetBookDetailsQuery } from "../../../Store/slices/apiSlice";
import { selectCurrentlySelectedId } from "../../../Store/slices/clubSlice";
import { LoadingIcon } from "../../LoadingIcon/LoadingIcon";
import SummaryView from "./SummaryView";
import bookCover from "../../../Images/book-cover.png"

export const Summary = () => {
    const currentlySelected = useSelector(selectCurrentlySelectedId)
    const { data, isLoading, isFetching } =
        useGetBookDetailsQuery( currentlySelected );

    let title = "";
    let author = "";
    let cover = "";
    let summary = "";

    const validateData = () => {
        if ( currentlySelected ) {
            title = data.volumeInfo.title ? data.volumeInfo.title : "";
            summary =
                data.volumeInfo.description ? data.volumeInfo.description :
                null;

            if( data.volumeInfo.authors )
                author = data.volumeInfo.authors[ 0 ];
            else
                author = "";

            if( data.volumeInfo.imageLinks ) {
                if( data.volumeInfo.imageLinks.medium )
                    cover = data.volumeInfo.imageLinks.medium;
                else if( data.volumeInfo.imageLinks.large )
                    cover = data.volumeInfo.imageLinks.large;
                else if( data.volumeInfo.imageLinks.extraLarge )
                    cover = data.volumeInfo.imageLinks.extraLarge;
                else if( data.volumeInfo.imageLinks.small )
                    cover = data.volumeInfo.imageLinks.small;
                else
                    cover = bookCover;
            } else
                cover = bookCover;
        } else {
            title = "Add book to Reading List";
            cover = bookCover;
        }
    }

    let content;

    if( isLoading || isFetching ) {
        content = <LoadingIcon/>
    } else {
        validateData();
        content = <SummaryView
            title={ title }
            author={ author }
            cover={ cover }
            summary={ summary }/>
    }

    return (
        content
    );
}