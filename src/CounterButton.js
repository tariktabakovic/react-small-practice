import React from 'react'

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            number: 0
        }
    }
    render(){
        return (
            <div>
                <button onClick= {this._incrementNumber}>Add 1</button>
                <div value={this.state.number}
                     onChange={(event)=>{
                     this._incrementNumber('number', event.target.value);
                    }}>{this.state.number}
                </div>
            </div>
        )
    }

    _incrementNumber = () =>{
        this.setState({
            number: this.state.number + 1
        })
    }
}


