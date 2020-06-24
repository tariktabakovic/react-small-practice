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
                    <CounterButton key={i} counter={counter.counter} index={i} color={counter.color}/>
                ))}
            </div>
        )
    }

    _increment = (index) => {
        const newButtons = [...this.state.buttons];
        newButtona[index].counter = this.state.buttons[index].counter + 1;
        newButtons[index].color = newButtons[index].counter % 2 === 0? 'green' : 'red';
        this.setState({
            buttons: newButtons
        })
    }
}


