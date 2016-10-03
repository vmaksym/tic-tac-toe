import React from 'react';
import Board from './Board'
import Status from './Status'

const TicTacToe = () => (
    <div className="app">
        <h1>TIC TAC TOE</h1>
        <Status />
        <Board />
    </div>
);

export default TicTacToe