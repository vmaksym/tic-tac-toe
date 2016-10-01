import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import { toggleBoard } from './Actions'

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

const mapDispatchToCellProps = (dispatch) => ({
    onCellClick: (board, x, y, value) => dispatch(toggleBoard(board, x, y, value))
});

Board = connect(
    mapStateToCellProps,
    mapDispatchToCellProps
)(Board);

export default Board
