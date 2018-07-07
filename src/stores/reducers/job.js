const initial = {
  data: [],
  loading: false
}

export const jobs = (state = initial, { type, payload = {keyword: ''} }) => {
  switch (type) {
    case 'fetchJobsRequested':
      return {
        ...state,
        loading: true
      }
    case 'fetchJobsSucceed':
      return {
        ...state,
        data: payload,
        loading: false
      }
    case 'fetchJobsFailed':
      return {
        ...state,
        loading: false
      }

    case 'searchRequested':
    let filteredJobs = state.data.filter(item => item.title.toLowerCase().includes(payload.keyword.toLowerCase()))
    return {
      ...state,
      data: filteredJobs
    }

    default:
      return state
  }
}
