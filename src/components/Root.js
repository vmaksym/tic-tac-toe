import React from 'react';
import { Provider } from 'react-redux'
import TicTacToe from './TicTacToe'

const Root = ({store}) => (
    <Provider store={store}>
        <TicTacToe />
    </Provider>
);

export default Root
