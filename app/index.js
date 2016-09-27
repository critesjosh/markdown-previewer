
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('../components/Main');
var Output = require('./components/Output')

require('../stylesheets/main.css');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
