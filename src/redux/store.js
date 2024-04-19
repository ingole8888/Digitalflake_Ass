import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from 'redux-thunk';
import {reducer as Authreducer} from "./authreducer/reducer";
import {reducer as Appreducer} from "./appreducer/reducer";

const rootReducer = combineReducers({
   Authreducer,
   Appreducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

