const player = (state = 'X', action) => {
    switch (action.type) {
        case 'FETCH_GAME_SUCCESS':
        case 'TOGGLE_CELL_SUCCESS':
            return action.response.player;
        default:
            return state;
    }
};

export default player