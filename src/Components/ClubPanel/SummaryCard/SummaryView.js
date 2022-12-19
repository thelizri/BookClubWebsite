import React from "react";
import "./SummaryStyle.css";

const SummaryView = function ( { title, author = "", cover, summary = "No summary available :-/" } ) {
    return (
        <div className={ "container bg-white m-2" }
                id={ "summaryViewContainer" }>
        <div className={ "row" }>
            <div className={ "col" }>
                <img src={ cover }
                     style={ { width: 150 } }
                     className={ "img-fluid" } alt={ "Image Missing" }
                     id={ "imageSummary" }/>
            </div>
            <div className={ "col" }>
                <div><h4>{ title }</h4></div>
                <div><h5 className={ "text-muted" }>{ author }</h5></div>
                <br></br>
                <div><span dangerouslySetInnerHTML={ { __html: summary } } /></div>
            </div>
        </div>
    </div>
    )
};

export default SummaryView;