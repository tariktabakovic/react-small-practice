import React from 'react';

function CounterButton({counter, color, index}){

    const styles= {color};

    return (
        <div>
            <button style={styles}>{counter}</button>
        </div>
    )
}

export default CounterButton;