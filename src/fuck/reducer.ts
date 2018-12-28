import ActionType from './actionType'

type Action = {
  type: ActionType
  [prop: string]: any
}

export default (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.Fuck:
      return state + 1
    default:
      return state
  }
}
