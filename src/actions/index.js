import * as api from '../api'

const receiveBoard = (response) => ({
    type: 'RECEIVE_BOARD',
    response
});

const requestBoard = () => ({
    type: 'REQUEST_BOARD'
});

export const fetchBoard = () => (dispatch) => {
    dispatch(requestBoard());
    api.fetchBoard().then(response =>
        dispatch(receiveBoard(response))
    );
};

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