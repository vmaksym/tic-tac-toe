import { makeRootReducer } from './reducers/Reducers'
import { createStore, applyMiddleware } from 'redux'
import {loadState, saveState} from './localStorage'
import throttle from  'lodash/throttle'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

const configureStore = () => {
    let middlewares = [promise];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const serializedState = loadState();
    const store = createStore(
        makeRootReducer(),
        serializedState,
        applyMiddleware(...middlewares)
    );

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }),1000);

    return store;
};

export default configureStore