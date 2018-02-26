import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import Board from './features/Board/Board';
import configureStore from './store';

let store = configureStore();

render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ App } />
            <Route path="/start" component={ Board } />
        </Router>,
    </Provider>,
    document.getElementById('app')
);


