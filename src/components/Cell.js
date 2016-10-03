import React from 'react';

const Cell = ({ readOnly, text, player, onClick }) => {
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