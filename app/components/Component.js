var React = require('react');
var PropTypes = React.PropTypes;

function Component (props) {
    return (
      <div className="col-sm-12">
        <div className="col-sm-6">
          <textarea
            placeholder=""
            onChange={props.onUpdateMarkdown}
            value={props.text}
            type="text"
            />
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML= {{__html: props.html}} />
        </div>
      </div>
    )
  }

  Component.propTypes = {
    onUpdateMarkdown: PropTypes.func.isRequired,
    html: PropTypes.string.isRequired
  }

module.exports = Component;
