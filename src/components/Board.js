import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import * as actions from '../actions'
import { getIsFetching, getErrorMessage } from '../reducers'
import FetchError from '../components/FetchError'

class Board extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchBoard} = this.props;
        fetchBoard();
    }

    render() {
        const {board, player, winner, toggleBoard, isFetching, errorMessage} = this.props;
        if (isFetching && !board.length) {
            return <p>Loading...</p>
        }
        if (errorMessage && !board.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            ></FetchError>
        }
        return (
            <div className="board"> {
                board.map(row =>
                    row.items.map( cell =>
                        <Cell key={cell.id} readOnly={cell.value !== '' || winner !== ''} text={cell.value} player={player}
                              onClick={() => toggleBoard(row.id, cell.id, player)} />))
            }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    board: state.board.data,
    player: state.player,
    winner: state.winner,
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state)
});

Board = connect(
    mapStateToProps,
    actions
)(Board);

export default Board
