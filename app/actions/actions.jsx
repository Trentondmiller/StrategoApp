import C from '../constants.js'

export const movePiece = (move) =>
{(
	type: C.MOVE_PIECE,
    payload: move
)}

export const placePiece = (coordinates) => 
{(
	type: C.PLACE_PIECE,
    payload: coordinates
)}

export const addError = (message) => 
({
    type: C.ADD_ERROR,
    payload: message
})

export const clearError = index => 
({
    type: C.CLEAR_ERROR,
    payload: index
})