const fakeDatabase = {
    board: [{
        id: 0, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    },{
        id: 1, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    },{
        id: 2, items: [{id:0, value: ''}, {id:1, value: ''}, {id:2, value: ''}]
    }],
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchBoard = () =>
    delay(500).then(() => {
        return fakeDatabase.board
    });