import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import session from './session';
import postReducer from './posts'
import commentsReducer from './comments';


const rootReducer = combineReducers({ 
    session, 
    posts: postReducer,
    comments: commentsReducer
});
let enhancer;

    if (process.env.NODE_ENV === 'production') {
        enhancer = applyMiddleware(thunk);
    } else {
        const logger = require('redux-logger').default;
        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk, logger));
    }

    export default function configureStore(preloadedState) {
        return createStore(rootReducer, preloadedState, enhancer);
    };

