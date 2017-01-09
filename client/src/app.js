var React = require('react');
var ReactDOM = require('react-dom');
var ShowBox = require('./components/ShowBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <ShowBox />,
    document.getElementById('app')
  );
}
