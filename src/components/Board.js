import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import * as actions from '../actions'

class Board extends Component {
    componentDidMount() {
        const {fetchBoard} = this.props;
        fetchBoard();
    }

    render() {
        const {board,player, winner, toggleBoard} = this.props;
        return (
            <div className="board"> {
                board.map(row =>
                    row.items.map( cell =>
                        <Cell key={cell.id} readOnly={cell.value !== '' || winner !== ''} text={cell.value} player={player}
                              onClick={() => toggleBoard(board, row.id, cell.id, player)} />))
            }
            </div>
        );
    }
}

const mapStateToCellProps = (state) => ({
    board: state.board,
    player: state.player,
    winner: state.winner
});

Board = connect(
    mapStateToCellProps,
    actions
)(Board);

export default Board
