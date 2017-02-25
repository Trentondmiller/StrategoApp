var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var Map = require('Map');

// App CSS
require('style!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Map}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
