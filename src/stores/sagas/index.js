import { all } from 'redux-saga/effects'
import job from './job'

export const sagas = function * () {
  yield all([
    job()
  ])
}
