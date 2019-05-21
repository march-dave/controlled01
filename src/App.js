import React, { Component } from 'react';

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            x: 10, 
            y: 20
        }
    }


    change = (e) => {
        let newValue = parseInt(e.target.value);
        if(isNaN(newValue)) newValue = 0;

        if(e.target.id === "x") 
            this.setState({ x: newValue});
        else 
            this.setState({ y: newValue});
    }

    render() {
        return (
            <div>
            x: <input id='x' type="text" value={this.state.x} onChange={this.change} />
            y: <input id='y' type="text" value={this.state.y} onChange={this.change} />
            result: <input type="text" value={this.state.x + this.state.y} />

            </div>
        );
    }
}



export default App;