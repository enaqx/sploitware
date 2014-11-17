/**
 * App entry point
 */

var React = require('react');
var Header = require('./components/Header.react');

var App = React.createClass({
  render: function() {
    return <Header />;
  }
});

React.render(<App />, document.body);
