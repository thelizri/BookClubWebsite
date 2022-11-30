import React, {useEffect, useState} from 'react';
import ExampleView from "../View/ExampleView";

function ExampleComponent(props){
    const[state, setState] = useState({}); //State
    useEffect(componentWasCreatedACB, []); //Only calls on first render

    return (<ExampleView /*Pass props here*/ />);

    function componentWasCreatedACB(){
        //Is called when the component is created

        function isTakenDownACB(){
            //Is called when the component is taken down
        }

        return isTakenDownACB;
    }
};

export default ExampleComponent;

