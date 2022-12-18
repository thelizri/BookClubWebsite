import React from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "./SummaryStyle.css";

function SummaryView( props ) {
    return (
        <div className="mytabs m-2">
            <input type="radio" id="tabfree" name="mytabs"/>
            <label htmlFor="tabfree">Progress</label>
            <div className="tab">
                {progressTab}
            </div>

            <input type="radio" id="tabsilver" name="mytabs" checked={"checked"} onChange={()=>{}}/>
            <label htmlFor="tabsilver">Synopsis</label>
            <div className="tab">
                {synopsisTab}
            </div>
        </div>);
}

const progressTab = (<div className={ "container bg-white m-2" }
                      id={ "summaryViewContainer" }>
    <div className={ "row" }>

        {/*Column for the book cover*/ }
        <div className={ "col" }>
            <img src={ require( "../../../Images/example-book-cover.jpg" ) }
                 className={ "img-fluid" } alt={ "Image Missing" }
                 id={ "imageSummary" }/>
        </div>

        {/*Column for the circular progress bar and the title/author*/ }
        <div className={ "col" }>
            <div><h4>Title</h4></div>
            <div><h4 className={ "text-muted" }>Author</h4></div>
            <CircularProgressbarWithChildren value={ 91 }>
                <div><h2>376/415</h2></div>
                <div>pages read</div>
            </CircularProgressbarWithChildren>
        </div>

        {/*How many pages you need to read*/ }
        <div className={ "col" }>
            <div id={ "currentread" }>Currently reading</div>
            <div className={ "text-center fw-bold" }>Pages to read per day
            </div>
            <div className={ "text-center" }><h1>18.5</h1></div>
            <div className={ "text-center fw-bold" }>Days until meeting
            </div>
            <div className={ "text-center" }><h1>2</h1></div>
        </div>
    </div>
    <div className="progress m-3">
        <div className="progress-bar" role="progressbar" aria-valuenow="70"
             aria-valuemin="0" aria-valuemax="100"
             style={ { width : '90%' } }>
            90%
        </div>
    </div>
</div>);

const synopsisTab = (
    <>
        <h2>Synopsis</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
    </>);


export default SummaryView;