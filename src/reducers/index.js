import { combineReducers } from 'redux'
import board, * as fromBoard from './board'
import winner from './winner'
import player  from './player'

const makeRootReducer = () => combineReducers({
    board,
    player,
    winner
});

export const getIsBoardFetching = (state) =>
    fromBoard.getIsBoardFetching(state.board);

export const getCellFetching = (state) =>
    fromBoard.getCellFetching(state.board);

export const getErrorMessage = (state) =>
    fromBoard.getErrorMessage(state.board);

export default makeRootReducer