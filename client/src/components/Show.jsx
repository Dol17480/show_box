var React = require('react');

var Show = React.createClass({
  render: function () {
    return (
      <div className='show'>
      <h4 className='show-name'>
      {this.props.name}
      </h4>
      <p>{this.props.children}</p>
      </div>
      )
  }
});

module.exports = Show;