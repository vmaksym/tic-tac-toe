const getPureBoard = () => [{
        id: 0, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    },{
        id: 1, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    },{
        id: 2, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    }];

const createFakeDatabase = () => ({
        player: 'X',
        winner: '',
        board: getPureBoard()
    });

let fakeDatabase = createFakeDatabase();

const latency = 1500;
const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchGame = () =>
    delay(latency).then(() => {
        return fakeDatabase
    });

export const fetchNewGame = () => {
    fakeDatabase = createFakeDatabase();
    return fetchGame();
};

const changePlayer = () => {
    fakeDatabase.player = fakeDatabase.player === 'X' ? 'O' : 'X';
};

const toggle = (x, y, value) => {
    fakeDatabase.board[x].items[y].value = value;
};

const getWinner = (x, y, value) => {
    const getBoardValue = (row, cell) =>
        fakeDatabase.board[row].items[cell].value;

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

    const hasEmptyCell = fakeDatabase.board.some(row =>
        row.items.some(cell => getBoardValue(row.id, cell.id) === '')
    );
    return hasEmptyCell ? '' : 'Friendship';
};

const checkVictory = (x, y, value) => {
    fakeDatabase.winner = getWinner(x, y, value);
};

export const toggleCell = (x, y, value) =>
    delay(latency).then(() => {
        toggle(x, y, value);
        changePlayer();
        checkVictory(x, y, value);

        return {
            x,
            y,
            value,
            player: fakeDatabase.player,
            winner: fakeDatabase.winner
        };
    });