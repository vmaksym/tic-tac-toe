import { combineReducers } from 'redux'

export const newBoard = () => {
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

const board = (state = newBoard(), action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD':
            return state.map(row => row.id === action.x ? boardRow(row, action) : row);
        case 'NEW_BOARD':
            return newBoard();
        default:
            return state;
    }
};

const player = (state = 'X', action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD':
            return state === 'X' ? 'O' : 'X';
        case 'NEW_BOARD':
            return 'X';
        default:
            return state;
    }
};

const winner = (state = '', action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD':
            return checkVictory(action);
        case 'NEW_BOARD':
            return '';
        default:
            return state;
    }
};


const checkVictory = (action) => {
    let {board, x, y, value} = action;
    const getBoardValue = (row, cell) => {
        return row === x && cell === y ? value : board[row].items[cell].value;
    };

    //check if previous move caused a win on vertical line
    if (getBoardValue(0, y) === value && getBoardValue(1, y) === value && getBoardValue(2, y) === value ) {
        return value;
    }
    //check if previous move caused a win on horizontal line
    if (getBoardValue(x, 0) === value && getBoardValue(x, 1) === value && getBoardValue(x, 2) === value ) {
        return value;
    }
    //check if previous move was on the main diagonal && caused a win
    if (x === y && getBoardValue(0, 0) === value && getBoardValue(1, 1) === value && getBoardValue(2, 2) === value) {
        return value;
    }
    //check if previous move was on the secondary diagonal && caused a win
    if (x + y === 2 && getBoardValue(0, 2) === value && getBoardValue(1, 1) === value && getBoardValue(2, 0) === value) {
        return value;
    }

    let hasEmptyCell = board.some(row => row.items.some(cell => getBoardValue(row.id, cell.id) === ''));
    return hasEmptyCell ? '' : 'Friendship';
};

export const makeRootReducer = () => combineReducers({
        board,
        player,
        winner
    });

export default makeRootReducer