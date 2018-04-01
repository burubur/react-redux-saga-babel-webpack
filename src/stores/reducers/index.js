import { combineReducers } from 'redux'
import { global } from './global'
import { layout } from './layout'

export const reducers = combineReducers({
  global,
  layout
})
