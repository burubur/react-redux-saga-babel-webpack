import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchJob } from './../../services/job'

function * fetchJobs ({type, payload}) {
  try {
    const response = yield call(() => fetchJob(payload))
    yield put({
      type: 'fetchJobsSucceed',
      payload: response
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
