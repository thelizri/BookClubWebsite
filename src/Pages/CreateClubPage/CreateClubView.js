/**
 * Create Club View
 */
export function CreateClubView( props ) {
    /**
     * Text Input Callback
     */
    function onTextInputACB( e ) {
        console.log( e.target.id, e.target.value );
    }

    /**
     * Number Input Callback
     */
    function onNumberInputACB( e ) {
        console.log( e.target.id, e.target.value );
    }

    /**
     * Radio Input Callback
     */
    function onRadioInputACB( e ) {
        console.log( e.target.name, e.target.id, e.target.value );
    }

    /**
     * Select Input Callback
     */
    function onSelectInputACB( e ) {
        console.log( e.target.id, e.target.value );
    }

    /**
     * Create Club Callback
     */
    function onCreateClub( e ) {
        console.log( e.target.id );
    }

    function generateOptionsCB( option ) {
        return <option key={ option }>{ option }</option>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-horizontal">
                        {
                            // Club Name
                        }
                        <div className="form-group">
                            <label>Club Name</label>
                            <input type="text" className="form-control"
                                   id="club-name" placeholder=""
                                   onInput={ onTextInputACB }></input>
                        </div>

                        {
                            // Genre
                        }
                        <div className="form-group">
                            <label>Genre</label>
                            <input type="text" className="form-control"
                                   id="genre" placeholder=""
                                   onInput={ onTextInputACB }></input>
                        </div>

                        {
                            // Language
                        }
                        <div className="form-group">
                            <label>Language</label>
                            <input type="text" className="form-control"
                                   id="language" placeholder=""
                                   onInput={ onTextInputACB }></input>
                        </div>

                        {
                            // Member Limit
                        }
                        <div className="form-group">
                            <label>Member Limit</label>
                            <input type="number" className="form-control"
                                   id="member-limit" placeholder="2"
                                   onInput={ onNumberInputACB }></input>
                        </div>

                        {
                            // Meeting Form
                        }
                        <div className="form-group">
                            <label>
                                Meeting Form
                            </label>
                            <select className="form-control" id="meeting-form"
                                    onInput={ onSelectInputACB }>
                                {
                                    // Change to prop!
                                    [ "onsite", "online" ].map(
                                        generateOptionsCB )
                                }
                            </select>
                        </div>

                        {
                            // Gender
                        }
                        <div className="form-group">
                            <label>Gender: </label>
                            <label className="radio-inline">
                                <input type="radio" name="gender-radios"
                                       id="all-radio" value="all"
                                       onInput={ onRadioInputACB }></input>
                                All
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="gender-radios"
                                       id="male-radio" value="male"
                                       onInput={ onRadioInputACB }></input>
                                Male
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="gender-radios"
                                       id="female-radio" value="female"
                                       onInput={ onRadioInputACB }></input>
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    {
                        // Create Club
                    }
                    <div className="btn btn-primary" id="create-club"
                         onClick={ onCreateClub }>
                        Create Club
                    </div>
                </div>
            </div>
        </div>
    );
}
