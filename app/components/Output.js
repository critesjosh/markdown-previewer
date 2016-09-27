var React = require('react');
var PropTypes = React.PropTypes;

function Output (props) {
    return (
      <div className="col-sm-12">
        <div className="col-sm-6">
          <textarea
            placeholder="#This is some markdown"
            onChange={props.onUpdateMarkdown}
            type="text"
            />
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML= {{__html: props.html}} />
        </div>
      </div>
    )
  }

  Output.propTypes = {
    onUpdateMarkdown: PropTypes.func.isRequired,
    markdownText: PropTypes.string.isRequired
  }

module.exports = Output;
