import { combineReducers, createStore } from "redux";
import {headerReducer} from './header-reducer';
import {partTableReducer} from './partTable-reducer';


let reducers = combineReducers({
    headerPage: headerReducer,
    partTablePage: partTableReducer,
})

let store = createStore(reducers);

window.store = store

export default store;