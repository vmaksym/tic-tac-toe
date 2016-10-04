import { makeRootReducer } from './reducers/Reducers'
import { createStore } from 'redux'
import {loadState, saveState} from './localStorage'
import throttle from  'lodash/throttle'

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if (!console.group) {
        return rawDispatch;
    }

    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnVal = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnVal;
    };
};

const configureStore = () => {
    const serializedState = loadState();
    const store = createStore(makeRootReducer(), serializedState);

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }),1000);

    return store;
};

export default configureStore