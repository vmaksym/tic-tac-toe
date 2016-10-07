import { combineReducers } from 'redux'

const newBoard = () => {
    return [{
        id: 0, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    },{
        id: 1, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    },{
        id: 2, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    }];
};

const boardCell = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD':
            return Object.assign({}, state, {value: action.response.value});
        default:
            return state;
    }
};
const boardRow = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD':
            return Object.assign({}, state, {
                items: state.items.map(cell => cell.id === action.response.y ? boardCell(cell, action) : cell)
            });
        default:
            return state;
    }
};

export const board = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BOARD_SUCCESS':
            return action.response.slice();
        case 'TOGGLE_BOARD_SUCCESS':
            return state.map(row => row.id === action.response.x ? boardRow(row, action) : row);
        case 'NEW_BOARD':
            return newBoard();
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_BOARD_SUCCESS':
        case 'FETCH_BOARD_FAILURE':
            return false;
        case 'FETCH_BOARD_REQUEST':
            return true;
        default:
            return state;
    }
};


const errorMessage = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_BOARD_FAILURE':
            return action.message;
        case 'FETCH_BOARD_SUCCESS':
        case 'FETCH_BOARD_REQUEST':
            return null;
        default:
            return state;
    }
};

export const getIsFetching = state => state.isFetching;

export const getErrorMessage = state => state.errorMessage;

const boardReducers = combineReducers({
    data: board,
    isFetching,
    errorMessage
});

export default boardReducers