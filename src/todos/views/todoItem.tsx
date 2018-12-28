import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'

export default connect(undefined, (dispatch, { item: { id } }: {
  item: { id: number }
}) => ({
  onToggle () { dispatch(toggleTodo(id)) },
  onRemove () { dispatch(removeTodo(id)) },
}))(function TodoItem ({ onToggle, onRemove, item: { text, completed } }: {
  item: { text: string, completed: boolean }
  onToggle (): void
  onRemove (): void
}) {
  console.log(text)
  return (
    <li
      className='todo-item'
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      <input className='toggle' type='checkbox' checked={completed} onChange={onToggle} />
      <label className='text'>{text}</label>
      <button className='remove' onClick={onRemove}>×</button>
    </li>
  )
})
