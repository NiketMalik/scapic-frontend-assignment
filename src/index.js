import React from 'react'
import ReactDOM from 'react-dom'

import reducers from 'store/reducers'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import * as serviceWorker from './serviceWorker'

const store = createStore(combineReducers(reducers))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
)

serviceWorker.register();
