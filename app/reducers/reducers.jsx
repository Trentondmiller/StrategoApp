import C from '../constants'

export const piece = (state={}, action) => {
  switch (action.type) {
    case C.MOVE_PIECE:
      return state;
    default:
      return state;
  }
};

export const board = (state=[], action) => {
  switch (action.type) {
    case C.UPDATE_BOARD:
      return action.board;
    default:
      return state;
  }
};

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
};
