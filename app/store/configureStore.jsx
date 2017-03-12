import * as redux from 'redux';
import thunk from 'redux-thunk';

import {piece, board, game} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    piece: piece,
    board: board,
    game: game
  });
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};



