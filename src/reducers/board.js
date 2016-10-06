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
            return Object.assign({}, state, {value: action.value});
        default:
            return state;
    }
};
const boardRow = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD':
            return Object.assign({}, state, {
                items: state.items.map(cell => cell.id === action.y ? boardCell(cell, action) : cell)
            });
        default:
            return state;
    }
};

export const board = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_BOARD':
            return action.response.slice();
        case 'TOGGLE_BOARD':
            return state.map(row => row.id === action.x ? boardRow(row, action) : row);
        case 'NEW_BOARD':
            return newBoard();
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'RECEIVE_BOARD':
            return false;
        case 'REQUEST_BOARD':
            return true;
        default:
            return state;
    }
};

export const getIsFetching = state => state.isFetching;

const boardReducers = combineReducers({
    data: board,
    isFetching
});

export default boardReducers