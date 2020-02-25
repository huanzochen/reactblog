import fetch from 'isomorphic-fetch'
import axios from 'axios';
import webhookURL from '../util/config';

/*
* action type
*/

export const ADD_WORD = 'ADD_WORD';

// for testing 
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const GET_REDDIT_REQUEST = 'GET_REDDIT_REQUEST';
export const GET_REDDIT_SUCCESS = 'GET_REDDIT_SUCCESS';
////////////
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE';
export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';


/*
* action creator
*/

export const addWord = (text) => {
    return {
        type: ADD_WORD,
        text: text
    }
}

export function getArticleRequest(article){
  return {
    type: GET_ARTICLE_REQUEST,
    article
  };
}

export function getArticleFailure(err){
    return {
      type: GET_ARTICLE_FAILURE,
      err
    };
}

export function getArticleSuccess(article, json){
    return {
      type: GET_ARTICLE_SUCCESS,
      article,
      posts: json.map(child => child),
      receivedAt: Date.now()
    };
}


// for testing 

export function getRedditRequest(subreddit){
    return {
      type: GET_REDDIT_REQUEST,
      subreddit
    };
  }

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function getRedditSuccess(subreddit, json){
    return {
      type: GET_REDDIT_SUCCESS,
      subreddit,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    };
}

// 迎接我們的第一個 thunk action creator！
// 雖然它裡面不一樣，不過你可以就像其他的 action creator 一般使用它：
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit) {

    // Thunk middleware 知道如何去處理 function。
    // 它把 dispatch method 作為參數傳遞給 function，
    // 因此讓它可以自己 dispatch action。
  
    return function (dispatch) {
  
      // 第一個 dispatch：更新應用程式 state 以告知
      // API 呼叫開始了。
  
      dispatch(getRedditRequest(subreddit))
  
      // 被 thunk middleware 呼叫的 function 可以回傳一個值，
      // 那會被傳遞作為 dispatch method 的回傳值。
  
      // 在這個案例中，我們回傳一個 promise 以等待。
      // 這不是 thunk middleware 所必須的，不過這樣對我們來說很方便。
  
      return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => {
  
          // 我們可以 dispatch 許多次！
          // 在這裡，我們用 API 呼叫的結果來更新應用程式的 state。
          console.log("json");
          //console.log(json);
          json.data.children.map(child => {
            console.log('child.data');
            //console.log(child.data);
            })
          dispatch(getRedditSuccess(subreddit, json))
        })
  
        // 在一個真實世界中的應用程式，你也會想要
        // 捕捉任何網路呼叫中的錯誤。
    }
}

////////////


export function fetchArticle(article) {
    return function (dispatch) {
        dispatch(getArticleRequest(article))
        return fetch( webhookURL.url + `/api/article`)
        .then(response => response.json())
        .then(json => {
            console.log("json");
            //console.log(json);
            json.map(child => {
                console.log('child');
                //console.log(child);
            })
            dispatch(getArticleSuccess(article, json))
        })
    }
}

export function goLogin(user) {
  console.log("ownProps");
  console.log(user);
  axios.post( webhookURL.url + '/api/login/login', {
    user: {
        username: user.username,
        password: user.password
    }
  },
  {
      withCredentials: true
  },
  )
  .then(response => {
      console.log(response);
  })
  .catch(error => {
      console.dir("登入失敗!", error);
  })

}
