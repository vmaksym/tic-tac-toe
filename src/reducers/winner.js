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

export default winner