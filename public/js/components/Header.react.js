/**
 * Header/Menu component
 */

 "use strict";

var React = require('react');
require('../../css/bootstrap.min.css');

var tags = ['Tag #1', 'Tag #2', 'Tag #3', 'Tag #4', 'Tag #5', 'Tag #6'];

var Header = React.createClass({
  render: function() {

    /* Take tags list to show */
    var tagsToRender = [];
    tags.forEach(function(tag) {
      tagsToRender.push( <li><a href="#">{tag}</a></li> )
    });

    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" 
                    className="navbar-toggle collapsed" 
                    data-toggle="collapse" 
                    data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SploitWare</a>
          </div>

          <div className="collapse navbar-collapse" 
               id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">New </a></li>
              <li className="dropdown">
                <a href="#" 
                   className="dropdown-toggle" 
                   data-toggle="dropdown" 
                   role="button" aria-expanded="false">Tags
                <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  {tagsToRender}
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" 
                       className="form-control" 
                       placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">User</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = Header;
