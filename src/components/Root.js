import React from 'react';
import { Provider } from 'react-redux'
import TicTacToe from './TicTacToe'
import {Router, Route, browserHistory} from 'react-router'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={TicTacToe} />
        </Router>
    </Provider>
);

export default Root
