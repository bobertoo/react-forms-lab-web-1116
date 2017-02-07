const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: '',
      counter: this.props.maxChars,
    };
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      counter: this.props.maxChars - event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
