import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BlogReducer } from "./Blog/BlogReducer";
import { LogsReducer } from "./Logs/LogsReducer";

const rootReducer = combineReducers({
  Blogs: BlogReducer,
  Logs: LogsReducer,
});

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancer(applyMiddleware(thunk)));

export default store;
