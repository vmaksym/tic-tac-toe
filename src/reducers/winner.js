const winner = (state = '', action) => {
    switch (action.type) {
        case 'TOGGLE_BOARD_SUCCESS':
            return action.response.winner;
        case 'NEW_BOARD':
            return '';
        default:
            return state;
    }
};

export default winner