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