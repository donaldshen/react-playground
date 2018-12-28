import { createStore, combineReducers } from 'redux'

import { reducer as todoReducer } from './todos'
import { reducer as filterReducer } from './filter'
import { reducer as fuckReducer } from './fuck'

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  fuck: fuckReducer,
})

const key = '__REDUX_DEVTOOLS_EXTENSION__'
// @ts-ignore
const storeEnhancers = (key in window) ? window[key]() : undefined

export default createStore(reducer, storeEnhancers)
