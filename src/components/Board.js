import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import { toggleBoard } from '../actions/Actions'

let Board = ({
    board,
    player,
    winner,
    onCellClick
}) => (
    <div className="board"> {
        board.map(row =>
            row.items.map( cell =>
                <Cell key={cell.id} readOnly={cell.value !== '' || winner !== ''} text={cell.value} player={player}
                      onClick={() => onCellClick(board, row.id, cell.id, player)} />))
    }</div>
);

const mapStateToCellProps = (state) => ({
    board: state.board,
    player: state.player,
    winner: state.winner
});

Board = connect(
    mapStateToCellProps,
    {onCellClick: toggleBoard}
)(Board);

export default Board
