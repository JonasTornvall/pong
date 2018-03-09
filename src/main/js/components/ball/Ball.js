import React, { Component } from 'react';

class Ball extends Component {

    constructor(props, context) {
        super(props, context);
        //this.state = {}
        
    };

    componentDidMount() {
        //let ballCanvas = document.getElementById("ballThingy");
        let ctx = this.refs.canvas.getContext('2d');
        //ctx.fillRect(0,0,100,100);
        ctx.canvas.className = 'ball';
        
        console.log('yo ball', ctx);
    };



    render() {
        return (
            <canvas ref="canvas" />
        );
    };
}

export default Ball;