import { combineReducers, createStore } from "redux";
import contentReducer from "./contentReducer";

let reducers = combineReducers({
    content: contentReducer,
});


let store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;

export default store;