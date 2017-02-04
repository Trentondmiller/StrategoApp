var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var MapSpot = React.createClass({
  render: function () {
    var {id, text, xCoord, yCoord, Piece} = this.props;

    return (
      <div className="post">
        <img src="./Media/Land/Land.jpg"/>
      </div>
    )
  }
});

export default connect()(MapSpot);
