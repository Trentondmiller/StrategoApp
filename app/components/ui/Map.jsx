var React = require('react');


const Map = ({board, game, movePiece}) => 
{
	console.log({board});
  return (
      <div>
        {board.map((mapSpace) => {
          return (
              <MapSpot key={mapSpace.index} mapSpace={mapSpace}/>
            );
        })}
      </div>
    )
}


export default Map
