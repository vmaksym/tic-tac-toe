const winner = (state = '', action) => {
    switch (action.type) {
        case 'TOGGLE_CELL_SUCCESS':
        case 'FETCH_GAME_SUCCESS':
            return action.response.winner;
        default:
            return state;
    }
};

export default winner