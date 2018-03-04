import React, { Component } from 'react';

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        console.log('component will mount duder');
    }

    render() {
        return (
            <div>
                <a className="link" href="/start">Starta</a>
            </div>
        );
    }
}

export default App;