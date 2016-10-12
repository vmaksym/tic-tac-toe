import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import * as actions from '../actions'
import { getIsBoardFetching, getCellFetching, getErrorMessage } from '../reducers'
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
        const {board, player, winner, toggleCell, isFetching, cellFetching, errorMessage} = this.props;
        if (isFetching && !board.length) {
            return <div>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle-o-notch fa-spin fa-lg"></i>
                    </span>
                    Loading...
                </div>;
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
                        <Cell key={cell.id}
                              readOnly={cell.value !== '' || winner !== '' || cellFetching.isFetching}
                              fetching={cell.id === cellFetching.y && row.id === cellFetching.x}
                              text={cell.value} player={player}
                              onClick={() => toggleCell(row.id, cell.id, player)} />))
            }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    board: state.board.data,
    player: state.player,
    winner: state.winner,
    isFetching: getIsBoardFetching(state),
    cellFetching: getCellFetching(state),
    errorMessage: getErrorMessage(state)
});

Board = connect(
    mapStateToProps,
    actions
)(Board);

export default Board
