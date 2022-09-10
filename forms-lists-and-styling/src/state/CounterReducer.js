export function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'counter/increment':
      return state + action.by 
    case 'counter/decrement':
      return state - action.by
    case 'counter/reset': state = 0
      return state
    default:
      return state
  }
}

