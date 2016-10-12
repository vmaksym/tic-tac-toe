import React from 'react'
import { connect } from 'react-redux'
import { fetchNewBoard } from '../actions'

const mapStateToPayerStatus = (state) => ({
    player: state.player,
    winner: state.winner
});

let Status = ({player, winner, fetchNewBoard}) => {
    if (winner !== '') {
        return <h3>{winner} won! <a href="#" onClick={() => fetchNewBoard()}>Start new game?</a></h3>
    }
    return <h3>Player {player}</h3>
};
Status = connect(
    mapStateToPayerStatus,
    { fetchNewBoard }
)(Status);

export default Status