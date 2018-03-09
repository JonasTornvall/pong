import React, { Component } from 'react';
import Ball from '../../components/ball/Ball'

const moveUp = (elem) => {
    let marginTop = Number(window.getComputedStyle(elem, null).getPropertyValue('margin-top').split('px')[0]);
    if(marginTop > 0) {
        elem.style.marginTop = marginTop - 20 + 'px';
    }
}
const moveDown = (elem) => {
    let marginTop = Number(window.getComputedStyle(elem, null).getPropertyValue('margin-top').split('px')[0]);
    if(marginTop < 600) {
        elem.style.marginTop = marginTop + 20 + 'px';
    }
}

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    console.log('hej', map);
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
}

class Board extends Component {

    constructor(props, context) {
        super(props, context);
    }

    _handleKeyDown(event) {
        event.stopPropagation();
        console.log('keycode dude', event.keyCode);
        const upArrow = 38;
        const downArrow = 40;
        const aButton = 65;
        const zButton = 90;
        switch (event.keyCode) {
            case upArrow:
                moveUp(document.getElementById('pongBlock2'));
                break;
            case downArrow:
                moveDown(document.getElementById('pongBlock2'));                
                break;
            case aButton:
                moveUp(document.getElementById('pongBlock1'));
                break;
            case zButton:
                moveDown(document.getElementById('pongBlock1'));
                break;
            default:
                break;

        }
    }

    _handleKeyUp(event) { console.log('keyup dude', event.keyCode)}

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    render() {
        return (
            <div id="pongWrapper">
                <div id="leftBox" className="sidebox">
                    <div id="pongBlock1" className="pongblock pongblock--left"></div>
                </div>
                <div id="centerBox" className="centerbox">
                    <Ball id="ball" className="ball"></Ball>
                </div>
                <div id="rightBox" className="sidebox">
                    <div id="pongBlock2" className="pongblock pongblock--right"></div>
                </div>              
            </div>
        );
    }
}

export default Board;