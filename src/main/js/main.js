import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import Board from './features/Board/Board';
//import css from '../../test.css';
import css from '../resources/static/built/app.css';

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App } >
            <IndexRoute component={ App } />
        </Route>
        <Route path="start" component={ Board } />
    </Router>,
    document.getElementById('app')
);


