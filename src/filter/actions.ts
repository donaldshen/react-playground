import ActionType from './actionType'
import { Filter } from '../types'

export function setFilter (filter: Filter) {
  return {
    type: ActionType.SetFilter,
    filter,
  }
}
