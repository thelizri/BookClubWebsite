import React from "react";
import "./SummaryStyle.css";

const SummaryView = function( { title, author = "", cover,
                                  summary = "No summary available :-/"
                              } ) {
    return (
        <div><h1 id={ "header24ClubPanelView" }><br/></h1>
            <div className={ "container bg-white m-2" }
                 id={ "summaryViewContainer" }>
                <div className={ "row" }>
                    <div className={ "col" }>
                        <img src={ cover }
                             style={ { width : 150 } }
                             className={ "img-fluid" } alt={ "Image Missing" }
                             id={ "imageSummary" }/>
                    </div>
                    <div className={ "col m-2" }>
                        <div><h5>{ title }</h5></div>
                        <div><h6 className={ "text-muted" }>{ author }</h6>
                        </div>
                        <br></br>
                        <div className="synopsis"><span
                            dangerouslySetInnerHTML={ { __html : summary } }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SummaryView;
