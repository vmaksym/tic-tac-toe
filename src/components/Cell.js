import React from 'react';

const Cell = ({ readOnly, fetching, text, player, onClick }) => {
    if (fetching) {
        return <div className="board__cell">
            <div className="board__cell-content board__cell-content--read-only">
                <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
            </div>
        </div>
    }

    if (readOnly) {
        return <div className="board__cell">
            <div className="board__cell-content board__cell-content--read-only">{text}</div>
        </div>
    }

    return (
        <div className="board__cell">
            <div className="board__cell-content" onClick={e => {
                e.preventDefault();
                onClick();
            }}>{text || player}</div>
        </div>
    );
};

export default Cell