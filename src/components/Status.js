import React from 'react'
import { connect } from 'react-redux'
import { startNewGame } from '../actions'

const mapStateToPayerStatus = (state) => ({
        player: state.player,
        winner: state.winner
    });

let Status = ({player, winner, dispatch}) => {
    if (winner !== '') {
        return <h3>{winner} won! <a href="#" onClick={() => dispatch(startNewGame())}>Start new game?</a></h3>
    }
    return <h3>Player {player}</h3>
};
Status = connect(mapStateToPayerStatus, null)(Status);

export default Status