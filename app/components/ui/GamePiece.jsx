var React = require('react');

const GamePiece = ({gamePiece}) => 
{
  return ({
      <div>
        <image src={gamePiece.piece.image}/>
      </div>
    })
}


export default GamePiece
