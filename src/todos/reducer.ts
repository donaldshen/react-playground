import ActionType from './actionType'
import { Todo } from '../types'

type Action = {
  type: ActionType
  [prop: string]: any
}

export default function (state: Todo[] = [], action: Action) {
  switch (action.type) {
    case ActionType.AddTodo: {
      const { id, text, completed } = action
      return [{ id, text, completed }, ...state]
    }
    case ActionType.ToggleTodo: {
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      })
    }
    case ActionType.RemoveTodo: {
      return state.filter(todo => todo.id !== action.id)
    }
    default: return state
  }
}
