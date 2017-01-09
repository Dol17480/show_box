var React = require('react');
var Show = require('./Show.jsx')

var ShowList = React.createClass({
  render: function () {
    var showComponents = this.props.shows.map(function (showObject) {
     return (
      <Show name={showObject.name}
      key={showObject.id}
      ></Show>
      )
   });

    return (
      <div className='show-list'>
      {showComponents}
      </div>
      )
  }
});

module.exports = ShowList;