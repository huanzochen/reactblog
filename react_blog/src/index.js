import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'
import { getRedditRequest, fetchPosts, fetchArticle } from './actions'
import App from './App';

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // 讓我們來 dispatch() function
            loggerMiddleware // 巧妙的 middleware，用來 log action
        )
))





// for testing 
store.dispatch(getRedditRequest('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() => {
    console.log('fetch 完囉')
    //console.log(store.getState())
})
///////

/*
store.dispatch(fetchArticle('articlelist')).then(() => {
    console.log("fetch 完 Article囉")
})
*/





ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


  

