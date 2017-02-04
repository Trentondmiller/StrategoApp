export var movePiece = (place) => {
  return {
    type: 'MOVE_PIECE',
    place
  };
};

export var placePiece = () => {
  return {
    type: 'PLACE_PIECE'
  };
};
