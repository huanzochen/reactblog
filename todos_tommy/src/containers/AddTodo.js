import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  let input2

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() && !input2.value.trim()) {
          return
        }
        else if (!input.value.trim()) {
          dispatch(addTodo(input2.value))   
        }
        else if (!input2.value.trim()) {
          dispatch(addTodo(input.value))
        }
        input.value = ''
        input2.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
        <input ref={node => {
          input2 = node
        }} />
        <button type="submit">
          Add another todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo