import { makeRootReducer } from './reducers/Reducers'
import { createStore } from 'redux'
import {loadState, saveState} from './localStorage'
import throttle from  'lodash/throttle'

const configureStore = () => {
    const serializedState = loadState();
    const store = createStore(makeRootReducer(), serializedState);
    store.subscribe(throttle(() => {
        saveState(store.getState());
    }),1000);

    return store;
};

export default configureStore