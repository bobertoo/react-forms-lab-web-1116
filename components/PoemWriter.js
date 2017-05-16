const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };

    this.poemHandler = this.poemHandler.bind(this);
  }

  poemHandler(event) {
    this.setState({
      poem: event.target.value
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemHandler} />
          {this.state.poem.trim().split('\n').length != 3 ||
            this.state.poem.split('\n')[0].split(' ').filter(v => v != '').length != 5 ||
            this.state.poem.split('\n')[1].split(' ').filter(v => v != '').length != 3 ||
            this.state.poem.split('\n')[2].split(' ').filter(v => v != '').length != 5 ?
            <div id="poem-validation-error" style={{color: 'red'}}>
              'This poem is not written in the right structure!'
            </div> :
            null
          }
      </div>
    );
  }
}

module.exports = PoemWriter;
