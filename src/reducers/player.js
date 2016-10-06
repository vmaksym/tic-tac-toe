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

export default player