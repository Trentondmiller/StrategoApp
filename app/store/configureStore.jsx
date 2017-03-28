import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import gameReducers from '../reducers/reducers';

const consoleMessages = store => next => action => {

  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('State:', store.getState().loggedIn)
  result = next(action)

  let {loggedIn, errors} = store.getState()

  console.log(`

    loggedIn: ${loggedIn}
    errors: ${errors.length}

  `)

  console.groupEnd()

  return result

}

export default (initialState = {}) => {
  console.log("InitialState: " + JSON.stringify(initialState))
  return applyMiddleware(thunk,consoleMessages)(createStore)(gameReducers,initialState)
}



