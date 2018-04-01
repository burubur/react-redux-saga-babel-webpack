import { createStore } from 'redux'
import { reducers } from './index'
import { global } from './global'

const store = createStore(reducers)

it('it should return all function inside reducer folder', () => {
  expect(store.getState().global).toBeDefined()
  expect(store.getState().layout).toBeDefined()
})