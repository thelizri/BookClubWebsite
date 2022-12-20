import * as React from "react";
import { useSelector } from "react-redux";
import { useGetBookDetailsQuery } from "../../../Store/slices/apiSlice";
import {
    selectCurrentlySelectedId,
    selectReadingList
} from "../../../Store/slices/clubSlice";
import { LoadingIcon } from "../../LoadingIcon/LoadingIcon";
import SummaryView from "./SummaryView";
import bookCover from "../../../Images/book-cover.png"
import {skipToken} from "@reduxjs/toolkit/query";

export const Summary = () => {
    const currentlySelected = useSelector(selectCurrentlySelectedId)
    const readingList = useSelector(selectReadingList)
    const { data, isLoading, isFetching } =
        useGetBookDetailsQuery( currentlySelected ? currentlySelected : skipToken );

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
                if (data.volumeInfo.imageLinks.thumbnail)
                    cover = data.volumeInfo.imageLinks.thumbnail;
                else if( data.volumeInfo.imageLinks.medium )
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
            if( !readingList || readingList.length === 0 )
                title = "Add book to Reading List"
            else
                title = "Select book from Reading List";
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