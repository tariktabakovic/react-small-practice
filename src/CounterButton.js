import React from 'react';

function CounterButton({counter, color, index, increment}){

    const styles= {color};

    return (
        <div>
            <button onClick={() => {increment(index)}} style={styles}>{counter}</button>
        </div>
    )
}

export default CounterButton;