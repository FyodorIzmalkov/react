import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// function createThunkMiddleWare(extraArgument){
//     return ({dispatch, getState}) => next => action => {
//         if (typeof action === 'function'){
//             return action(dispatch, getState, extraArgument);
//         }
//         return next(action);
//     };
// }

// const thunk = createThunkMiddleWare();
// thunk.withExtraArgument = createThunkMiddleWare;
// export default thunk;

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));