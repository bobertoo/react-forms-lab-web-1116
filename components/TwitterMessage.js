const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      maxChars: this.props.maxChars
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    this.setState({
      tweet: event.target.value,
      maxChars: this.state.maxChars - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} />
        <p>Max chars: {this.state.maxChars}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
