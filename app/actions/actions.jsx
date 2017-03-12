
export var movePiece = (move) => {
  return {
    type: 'MOVE_PIECE',
    payload: move
  };
};

export var placePiece = (coordinates) => {
  return {
    type: 'PLACE_PIECE',
    payload: coordinates
  };
};
