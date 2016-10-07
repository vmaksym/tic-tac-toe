import * as api from '../api'

export const fetchBoard = () => (dispatch) => {
    dispatch({
        type: 'FETCH_BOARD_REQUEST'
    });
    api.fetchBoard().then(
        response => {
            dispatch({
                type: 'FETCH_BOARD_SUCCESS',
                response
            })
        },
        error => {
            dispatch({
                type: 'FETCH_BOARD_FAILURE',
                message: error.message
            })
        }
    );
};

export const toggleBoard = (x, y, value) => (dispatch) => {
    api.toggleBoard(x, y, value).then(
        response => {
            dispatch({
                type: 'TOGGLE_BOARD_SUCCESS',
                response
            })
        }
    );
};

export const startNewGame = () => ({
    type: 'NEW_BOARD'
});