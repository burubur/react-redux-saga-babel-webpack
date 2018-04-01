const initial = {
  configuration: {}
}

export const global = (state = initial, { type, payload }) => {
  switch (type) {
    case 'global/init':
      return {
        ...state
      }
    default:
      return state
  }
}
