var React = require('react');

const MapSpot = ({game, mapSpace, mapSpotSelected}) => 
{
  return ({
      <div>
        <GamePiece gamePiece={mapSpace.gamePiece}/>
      </div>
    })
}


export default MapSpot
