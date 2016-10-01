import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { makeRootReducer } from './reducers'
import TicTacToe from './TicTacToe'

ReactDOM.render(
    <Provider store={createStore(makeRootReducer())}>
        <TicTacToe />
    </Provider>,
    document.getElementById('app')
);

