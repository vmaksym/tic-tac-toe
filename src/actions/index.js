import * as api from '../api'

const receiveBoard = (board) => ({
    type: 'RECEIVE_BOARD',
    board
});

export const fetchBoard = () =>
    api.fetchBoard().then(board =>
        receiveBoard(board)
    );

export const toggleBoard = (board, x, y, value) => ({
    type: 'TOGGLE_BOARD',
    board,
    y,
    x,
    value
});

export const startNewGame = () => ({
    type: 'NEW_BOARD'
});