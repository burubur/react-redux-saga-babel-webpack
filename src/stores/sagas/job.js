import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchJob } from './../../services/job'

function * fetchJobs ({type, payload}) {
  try {
    const payload = yield call(fetchJob)
    yield put({
      type: 'fetchJobsSucceed',
      payload: payload
    })
  } catch (error) {
    yield put({
      type: 'fetchJobsFailed',
      error: error
    })
  }
}

function * saga () {
  yield takeEvery('fetchJobsRequested', fetchJobs)
}

export default saga
