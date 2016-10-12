import React from 'react';

const Cell = ({ readOnly, fetching, text, player, onClick }) => {
    const getCellText = (value) => {
        if (value === 'X') {
            return 'fa fa-close';
        } else if (value === 'O') {
            return 'fa fa-circle-o'
        }
    };

    if (fetching) {
        return <div className="board__cell">
            <div className="board__cell-content board__cell-content--read-only">
                <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
            </div>
        </div>
    }

    if (readOnly) {
        return <div className="board__cell">
            <div className="board__cell-content board__cell-content--read-only">
                <i className={getCellText(text)}></i>
            </div>
        </div>
    }

    return (
        <div className="board__cell">
            <div className="board__cell-content" onClick={e => {
                e.preventDefault();
                onClick();
            }}>
                <i className={getCellText((text || player))}></i>
            </div>
        </div>
    );
};

export default Cell