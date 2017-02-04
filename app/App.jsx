var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var Map = require('Map');

store.subscribe(() => {
	var state = store.getState();
	console.log('New State', state);
});

ReactDOM.render(
		<Map />,
	document.getElementById('app')
);