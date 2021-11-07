// External imports
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'

// Local imports
import App from './App1'
import rootReducer from './reducers/index'

// Assets
import './index.css'
import App1 from './App1'

const store = createStore(
  rootReducer,
  //composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById('root')
)