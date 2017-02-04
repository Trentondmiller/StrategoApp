var uuid = require('node-uuid');

export var movePieceReducer = (state = '', action) => {
  switch (action.type) {
    case 'MOVE_PIECE':
      return state;
    default:
      return state;
  }
};

export var placePieceReducer = (state = '', action) => {
  switch (action.type) {
    case 'PLACE_PIECE':
      return !state;
    default:
      return state;
  }
};

