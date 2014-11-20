/**
 * App entry point
 */

var React = require('react');
var Header = require('./components/Header.react');
var VulnerabilityList = require('./components/VulnerabilityList.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <VulnerabilityList />
      </div>
    )
  }
});

React.render(<App />, document.body);
