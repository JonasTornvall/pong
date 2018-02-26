import { combineReducers } from 'redux';
import BoardReducer from './features/board/BoardReducer';

const rootReducer = combineReducers({
    board: BoardReducer
});

export default rootReducer;