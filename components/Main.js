var React = require('react');
var marked = require('marked');

var Main = React.createClass({

  getInitialState: function () {
    return {
      markdownText: marked('markdn__.'),
    }
  },
  onUpdateMarkdown: function(e) {
      this.setState({
        markdownText: marked(e.target.value),
      });

  },
  render: function () {
    console.log('main')
    return (
      <div className="col-sm-12">
        <div className="col-sm-6">
          <textarea
            placeholder="#type markdown here."
            onChange={this.onUpdateMarkdown}
            type="text"
            />
        </div>
        <div className="col-sm-6" >
          <div dangerouslySetInnerHTML= {{__html: this.state.markdownText}} />
        </div>
      </div>
    )
  }
})

module.exports = Main;
