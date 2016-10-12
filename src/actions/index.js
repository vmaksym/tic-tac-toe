import * as api from '../api'


const fetchBoardRequest = (apiFn) => () => (dispatch) => {
    dispatch({
        type: 'FETCH_GAME_REQUEST'
    });
    apiFn().then(
        response => {
            dispatch({
                type: 'FETCH_GAME_SUCCESS',
                response
            })
        },
        error => {
            dispatch({
                type: 'FETCH_GAME_FAILURE',
                message: error.message
            })
        }
    );
};

export const fetchBoard = fetchBoardRequest(api.fetchGame);

export const fetchNewBoard = fetchBoardRequest(api.fetchNewGame);

export const toggleCell = (x, y, value) => (dispatch) => {
    dispatch({
        type: 'TOGGLE_CELL_REQUEST',
        x,
        y
    });
    api.toggleCell(x, y, value).then(
        response => {
            dispatch({
                type: 'TOGGLE_CELL_SUCCESS',
                response
            })
        },
        error => {
            dispatch({
                type: 'TOGGLE_CELL_FAILURE',
                message: error.message
            })
        }
    );
};

export const startNewGame = () => ({
    type: 'NEW_BOARD'
});