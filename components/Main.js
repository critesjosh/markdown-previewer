var React = require('react');
var marked = require('marked');

var Main = React.createClass({
  getInitialState: function () {
    return {
      markdownText: 'I am using __markdown__.'
    }
  },
  onUpdateMarkdown: function(e) {
    console.log(this.props.markdownText);
      this.setState({
        markdownText: marked(e.target.value)
      });

  },
  render: function () {
    return (
      <div className="col-sm-12">
        <div className="col-sm-6">
          <input
            placeholder="#This is some markdown"
            onChange={this.props.onUpdateMarkdown}
            value={this.props.markdownText}
            type="text"
            />
        </div>
        <div className="col-sm-6">
          <p>{this.state.markdownText}</p>
        </div>
      </div>
    )
  }
})

module.exports = Main;
