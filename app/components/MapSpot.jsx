var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var LandSpot = require('../media/Land/Land.jpg');

export var MapSpot = React.createClass({
  render: function () {
    var {id, text, xCoord, yCoord, Piece} = this.props;
    return (
      <div className="container">
      	<img src={LandSpot}/>
      </div>
    )
  }
});

export default connect()(MapSpot);
