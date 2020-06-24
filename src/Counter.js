import React from 'react'
import CounterButton from './CounterButton';

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            buttons: []
        }
    }

    render(){
        return (
            <div>
                {this.state.buttons.map((counter, i) =>(
                    <CounterButton counter={counter.counter}/>
                ))}
            </div>
        )
    }
}


