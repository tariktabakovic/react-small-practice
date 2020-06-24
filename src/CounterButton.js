import React from 'react';

function CounterButton({counter, color, index, increment, deleteCounter}){

    const styles= {color};

    return (
        <div>
            <button onClick={() => {increment(index)}} style={styles}>{counter}</button>
            <button onClick={() => {deleteCounter(index)}}>Delete</button>
        </div>
    )
}

export default CounterButton;