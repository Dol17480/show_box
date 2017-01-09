var React = require('react');
var ShowList = require('./ShowList.jsx')

var movies = [
  {id:1, name: "Sausage Party"},
  {id:2, name: "Café Society"},  
  {id:3, name: "La La Land"},
  {id:4, name: "Moana"}
]

var ShowBox = React.createClass({
  getInitialState: function () {
    return {data: movies}
  },

  getShowTimes: function(){
     console.log("button go click");
   },

  render:function (){
      return (
        <div className='show-box'>
          <h2> Now Showing! </h2>
          <ShowList shows={this.state.data}/>
          <a href="url">More new films</a>
          <br/>
          <br/>
          <button onClick={this.getShowTimes}>Get Showtimes!</button>
        </div>
        )
    },
});

module.exports = ShowBox;