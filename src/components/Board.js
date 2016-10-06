import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import * as actions from '../actions'
import { getIsFetching } from '../reducers'

class Board extends Component {
    componentDidMount() {
        const {fetchBoard} = this.props;
        fetchBoard();
    }

    render() {
        const {board, player, winner, toggleBoard, isFetching} = this.props;
        if (isFetching && !board.length) {
            return <p>Loading...</p>
        }
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

const mapStateToProps = (state) => ({
    board: state.board.data,
    player: state.player,
    winner: state.winner,
    isFetching: getIsFetching(state)
});

Board = connect(
    mapStateToProps,
    actions
)(Board);

export default Board
