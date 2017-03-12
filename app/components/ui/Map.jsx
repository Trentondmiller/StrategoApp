var React = require('react');


const Map = ({board, game, movePiece}) => 
{
  return ({
      <div>
        board.map((mapSpace) => {
          return (
              <MapSpot key={mapSpace.index} mapSpace={mapSpace}/>
            )
        })
      </div>
    })
}


export default Map
