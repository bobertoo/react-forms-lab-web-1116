const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  usernameHandler(event) {
    this.setState({
      username: event.target.value
    });
  }

  passwordHandler(event) {
    this.setState({
      password: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    // debugger;
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.usernameHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.passwordHandler}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
