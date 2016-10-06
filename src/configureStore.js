import  makeRootReducer  from './reducers'
import { createStore, applyMiddleware } from 'redux'
/*import {loadState, saveState} from './localStorage'
import throttle from  'lodash/throttle'*/
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const configureStore = () => {
    let middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    //const serializedState = loadState();
    const store = createStore(
        makeRootReducer(),
        /*serializedState,*/
        applyMiddleware(...middlewares)
    );

    /*store.subscribe(throttle(() => {
        saveState(store.getState());
    }),1000);*/

    return store;
};

export default configureStore