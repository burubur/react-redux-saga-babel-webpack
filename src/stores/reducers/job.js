const initial = {
  data: [],
  loading: false
}

export const jobs = (state = initial, { type, payload = {} }) => {
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
    default:
      return state
  }
}
