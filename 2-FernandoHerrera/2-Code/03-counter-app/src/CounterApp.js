import React, {useState} from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {


    const [counter, setCounter] =  useState(value);

    //handleAdd
    const handleCounter = (action)=>{
        
        let actionValue = 0;
        switch(action){
            case "INCREMENT":
                actionValue = counter + 1;
                break;
            case "DECREMENT":
                actionValue = counter - 1;
                break;
            default:
                actionValue = value;
        }
        setCounter(actionValue);
        //setCounter((c) => c + 1); //Cuando no tengamos acceso a la constante
        // el hook retorna la variable que se recupera por paremetro
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* Solución mia
            <button onClick={()=>{handleCounter("INCREMENT")}}>+1</button>
            <button onClick={()=>{handleCounter("RESET")}}>Reset</button>
            <button onClick={()=>{handleCounter("DECREMENT")}}>-1</button> */}

            {/* Solución del profe */}
            <button onClick={()=>{setCounter(counter+1)}}>+1</button>
            <button onClick={()=>{setCounter(value)}}>Reset</button>
            <button onClick={()=>{setCounter(counter-1)}}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;