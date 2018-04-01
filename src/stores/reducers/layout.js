const initial = {
  leftDrawer: {
    collapsed: false
  }
}

export const layout = (state = initial, { type, payload }) => {
  switch (type) {
    case 'layout/leftDrawer/toggle':
      return {
        ...state,
        leftDrawer: {
          ...state.leftDrawer,
          collapsed: payload
        }
      }

    default:
      return state
  }
}
