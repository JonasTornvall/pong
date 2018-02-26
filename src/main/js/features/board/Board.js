import React, { Component } from 'react';

class Board extends Component {

    constructor(props, context) {
        super(props, context);
    }

    _handleKeyDown(event) {
        const leftArrow = 37;
        const rightArrow = 39;
        switch (event.keyCode) {
            case leftArrow:
                this.props.previousPage();
                break;
            case rightArrow:
                this.props.nextPage();
                break;
            default:
                break;

        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    render() {
        return (
            <div>
                <div className="pongblock"></div>
            </div>
        );
    }
}

export default Board;