var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

import startingData from './initialState.json'
import { addError } from 'actions'
import Map from 'ui/Map'

// App CSS
require('style!applicationStyles');

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    startingData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
	store.dispatch(
		addError(error.message)
	)
}
const store = require('configureStore').configure(initialState);

window.React = React
window.store = store

window.addEventListener("error", handleError)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Map}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('react-container')
);
