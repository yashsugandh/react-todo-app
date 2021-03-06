import {combineReducers, createStore} from "redux";
import todosReducer from "../reducer/todos";

export default () => {
    const store = createStore(
        combineReducers(
            {
                todos: todosReducer,                
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    );
    return store;
};

