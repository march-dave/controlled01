import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = { x:0, y:0, result:0 };
    }
    
    add() {
        let x = parseInt(this.refs.ex.value);
        let y = parseInt(this.refs.ey.value);
        if (isNaN(x)) x = 0;
        if (isNaN(y)) y = 0;
        this.setState({ x:x, y:y, result:x+y });
    }

    render() {
        return (
            <div className="container">
                X : <input id="x" type="text" defaultValue={this.state.x}
                    ref="ex" /><br />
                Y : <input id="y" type="text" defaultValue={this.state.y}
                    ref="ey" /><br />
                <button onClick={this.add.bind(this)}>덧셈 계산</button><br/>
                결과 : <span>{this.state.result}</span>
            </div>
        )
    }
}

export default App;