import { combineReducers } from 'redux'

const boardCell = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_CELL_SUCCESS':
            return Object.assign({}, state, {value: action.response.value});
        default:
            return state;
    }
};
const boardRow = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_CELL_SUCCESS':
            return Object.assign({}, state, {
                items: state.items.map(cell => cell.id === action.response.y ? boardCell(cell, action) : cell)
            });
        default:
            return state;
    }
};

export const board = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GAME_SUCCESS':
            return action.response.board.slice();
        case 'TOGGLE_CELL_SUCCESS':
            return state.map(row => row.id === action.response.x ? boardRow(row, action) : row);
        default:
            return state;
    }
};

const cellFetching = (state = { isFetching: false }, action) => {
    switch (action.type) {
        case 'TOGGLE_CELL_SUCCESS':
        case 'TOGGLE_CELL_FAILURE':
            return {
                isFetching: false
            };
        case 'TOGGLE_CELL_REQUEST':
            return {
                isFetching: true,
                x: action.x,
                y: action.y
            };
        default:
            return state;
    }
};

const isBoardFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_GAME_SUCCESS':
        case 'FETCH_GAME_FAILURE':
            return false;
        case 'FETCH_GAME_REQUEST':
            return true;
        default:
            return state;
    }
};


const errorMessage = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_GAME_FAILURE':
            return action.message;
        case 'FETCH_GAME_SUCCESS':
        case 'FETCH_GAME_REQUEST':
            return null;
        default:
            return state;
    }
};

export const getIsBoardFetching = state => state.isBoardFetching;

export const getCellFetching = state => state.cellFetching;

export const getErrorMessage = state => state.errorMessage;

const boardReducers = combineReducers({
    data: board,
    isBoardFetching,
    cellFetching,
    errorMessage
});

export default boardReducers