import ActionType from './actionType'

let nextTodoId = 0

export function addTodo (text: string) {
  return {
    type: ActionType.AddTodo,
    completed: false,
    id: nextTodoId++,
    text,
  }
}

export function toggleTodo (id: number) {
  return {
    type: ActionType.ToggleTodo,
    id,
  }
}

export function removeTodo (id: number) {
  return {
    type: ActionType.RemoveTodo,
    id,
  }
}
