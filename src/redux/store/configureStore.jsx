import {combineReducers, createStore} from "redux";
import todosReducer from "../reducer/todos";
import filterReducer from "../reducer/filters";

export default () => {
    const store = createStore(
        combineReducers(
            {
                todos: todosReducer,
                filters: filterReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    );
    return store;
};

