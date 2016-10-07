const player = (state = 'X', action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD_SUCCESS':
            return action.response.player;
        case 'NEW_BOARD':
            return 'X';
        default:
            return state;
    }
};

export default player