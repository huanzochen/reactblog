import React from 'react';
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from '../../actions'
import { combineReducers } from 'redux'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
}

/*
function todoApp(state = {}, action) {
    return {
      visibilityFilter: visibilityFilter(state.visibilityFilter, action),
      todos: todos(state.todos, action)
    }
}
*/

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
    }
}

/*
class Articlelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render () {
        return(
            <h1> test </h1>
        );    
    }



}
*/

export default todoApp;