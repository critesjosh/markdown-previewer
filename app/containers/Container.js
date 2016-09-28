var React = require('react');
var marked = require('marked');
var Component = require('../components/Component');

var startingText = 'Heading\n=======\n\nSub-heading\n-----------\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line  \nto do a line break\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping list:\n* apples \n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in Spain.\n\n*[Josh Crites](https://critesjosh.github.io)*'

var Container = React.createClass({

  getInitialState: function () {
    return {
      text: startingText,
      markdownText: marked(startingText)
    }
  },
  handleUpdateMarkdown: function(e) {
      this.setState({
        text: e.target.value,
        markdownText: marked(e.target.value)
      });
  },
  render: function () {
    console.log('app main')
    return (
      <Component
        onUpdateMarkdown = {this.handleUpdateMarkdown}
        text={this.state.text}
        html= {this.state.markdownText}
      />
    )
  }
})

module.exports = Container;
