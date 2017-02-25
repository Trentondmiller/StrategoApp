var React = require('react');

import MapSpot from 'MapSpot';

var Map = React.createClass({
  render: function () {
    console.log("rendering Map");
    return (
      <div>
        <div className="row">>
            <MapSpot />
        </div>
      </div>
    )
  }
});

module.exports = Map;
