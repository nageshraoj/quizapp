import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducer/userReducer'

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
)
