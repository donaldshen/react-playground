import ActionType from './actionType'
import { Filter } from '../types'

type Action = {
  type: ActionType
  [prop: string]: any
}

export default (state = Filter.All, action: Action) => {
  switch (action.type) {
    case ActionType.SetFilter:
      return action.filter
    default:
      return state
  }
}
