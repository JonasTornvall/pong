import types from './BoardActionTypes';

const BoardActions = () => {
    move = (keyCode) => {
        if(keyCode === 37) {
            dispatch({
                type: types.MOVE_UP,
                payLoad: keyCode
            });
        }
        else if(keyCode === 38) {
            dispatch({
                type: types.MOVE_DOWN,
                payLoad: keyCode
            });
        }
    }

}

export default BoardActions;