import { combineReducers } from 'redux'
import addwords from './addwords'
import { 
    GET_ARTICLE_REQUEST,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILURE,
    GET_REDDIT_REQUEST,
    GET_REDDIT_SUCCESS,
    SELECT_SUBREDDIT
} from '../actions'


// for test
function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
      case SELECT_SUBREDDIT:
        return action.subreddit
      default:
        return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) {
    switch (action.type) {
      case GET_ARTICLE_FAILURE:
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case GET_REDDIT_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case GET_REDDIT_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          items: action.posts,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
      case GET_ARTICLE_FAILURE:
      case GET_REDDIT_SUCCESS:
      case GET_REDDIT_REQUEST:
        return Object.assign({}, state, {
          [action.subreddit]: posts(state[action.subreddit], action)
        })
      default:
        return state
    }
}

//////

function postsArticle(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) {
    switch (action.type) {
      case GET_ARTICLE_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case GET_ARTICLE_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          items: action.posts,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
}

function postByArticle(state = {}, action) {
    switch (action.type) {
        case GET_ARTICLE_FAILURE:
        case GET_ARTICLE_SUCCESS:
        case GET_ARTICLE_REQUEST:
            return Object.assign({}, state, {
                [action.article]: postsArticle(state[action.article], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    addwords,
    selectedSubreddit,
    postsBySubreddit,
    postByArticle
})

export default rootReducer
