import { combineReducers } from 'redux'
import { global } from './global'
import { layout } from './layout'
import { jobs } from './job'

export const reducers = combineReducers({
  global,
  layout,
  jobs
})
