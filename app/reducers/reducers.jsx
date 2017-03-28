import C from '../constants'
import { combineReducers } from 'redux'

export const errors = (state=[], action) => {
  switch(action.type) {
    case C.ADD_ERROR :
      return [
         ...state,
         action.payload
      ]
    case C.CLEAR_ERROR : 
      return state.filter((message, i) => i !== action.payload)
    default: 
      return state
  }
}

export const piece = (state={}, action) => {
  switch (action.type) {
    case C.MOVE_PIECE:
      return state;
    default:
      return state;
  }
}

export const board = (state=[], action) => {
  switch (action.type) {
    case C.UPDATE_BOARD:
      return action.board;
    default:
      return state;
  }
}

export const game = (state={}, action) => {
  switch (action.type) {
    case C.CHANGE_TURN:
      return action.game;
    case C.START_GAME:
      return action.game;
    case C.END_GAME:
      return action.game;
    default:
      return state;
  }
}


export default combineReducers({
    piece,
    board,
    game,
    errors
  })