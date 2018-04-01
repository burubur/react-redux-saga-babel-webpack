import deepFreeze from 'deep-freeze'
import { layout } from './layout'

it('it should has a function to update the layout state', () => {
  const stateBefore = {
    leftDrawer: {
      collapsed: false
    }
  }
  let stateAfter = {
    leftDrawer: {
      collapsed: true
    }
  }

  deepFreeze(stateBefore)
  deepFreeze(stateAfter)
  expect(layout(stateBefore, {type: 'layout/leftDrawer/toggle', payload: true})).toEqual(stateAfter)
})
