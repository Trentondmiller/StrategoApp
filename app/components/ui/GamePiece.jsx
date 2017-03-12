var React = require('react');

const GamePiece = ({gamePiece}) => 
{
  return ({
      <div>
        <image src={gamePiece.src}/>
      </div>
    })
}


export default GamePiece
