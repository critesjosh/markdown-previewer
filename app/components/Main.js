var React = require('react');
var marked = require('marked');
var Output = require('../components/Output');

var Main = React.createClass({

  getInitialState: function () {
    return {
      markdownText: marked('I am using __own__.')
      html: this.state.markdownText
    }
  },
  handleUpdateMarkdown: function(e) {
      this.setState({
        markdownText: marked(e.target.value)
        html: this.state.markdownText
      });
  },
  render: function () {
    console.log('app main')
    return (
      <Output
        onUpdateMarkdown = {this.handleUpdateMarkdown}
        html= {this.state.html}
      />
    )
  }
})

module.exports = Main;
