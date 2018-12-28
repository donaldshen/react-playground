import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import TodoItem from './todoItem'
import { Filter, State, Todo } from '../../types'

const combiner = (filter: Filter, todos: Todo[]) => {
  console.log('computed')
  switch (filter) {
    case Filter.All:
      return todos
    case Filter.Completed:
      return todos.filter(item => item.completed)
    case Filter.Uncompleted:
      return todos.filter(item => !item.completed)
    default:
      throw new Error('unsupported filter')
  }
}
const selector = createSelector(
  [
    (state: State) => state.filter,
    (state: State) => state.todos,
  ],
  combiner,
)

const selector2 = (state: State) => {
  const { filter, todos } = state
  return combiner(filter, todos)
}

export default connect(
  (state: State) => ({
    todos: selector(state),
    // NOTE: 因为某个prop（比如fuck）触发重新render时，selector会判断：除非相关的state改变，否则不需要重新计算
    // fuck: state.fuck,
  }),
)(function TodoList ({ todos }: { todos: Todo[] }) {
  return (
    <ul className='todo-list'>
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
        />
      ))
    }
    </ul>
  )
})
