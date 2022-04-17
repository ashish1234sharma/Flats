import {createStore,combineReducers} from "redux";

import {api_reducer} from "./reducer"

const rootreducer=combineReducers({
    api:"api_reducer",
    
    
})


export const store = createStore(rootreducer)