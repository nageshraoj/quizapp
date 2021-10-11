import { combineReducers } from 'redux'

const initialState = {
  isLoading: false,
  authen: false,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST': {
      console.log('action : LOG IN REQUEST')
      return {
        isLoading: true,
        authen: false,
      }
    }
    case 'LOG_IN_SUCCESS': {
      console.log('action : LOG IN SUCCESS')
      // console.log(action)
      return {
        isLoading: false,
        authen: true,
        token: action.payload.token,
      }
    }
    case 'LOG_IN_FAILURE': {
      console.log('action : LOG IN FAILURE')
      return initialState
    }
    case 'LOG_OUT': {
      console.log('action : LOG OUT')
      return initialState
    }
    default:
      return state
  }
}

export default combineReducers({
  isUserLogin: loginReducer,
})
