/**
 * Created by xiaojiang on 2016/12/20.
 */

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducer/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(appReducer,initialState);
    return store;
}