const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: '',
      showError: true
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      poemText: event.target.value
    })
    if (
      event.target.value.split('\n').length === 3 &&
      event.target.value.split('\n')[0].split(' ').filter(function(v){return v!==''}).length === 5 &&
      event.target.value.split('\n')[1].split(' ').filter(function(v){return v!==''}).length === 3 &&
      event.target.value.split('\n')[2].split(' ').filter(function(v){return v!==''}).length === 5
    ){
      this.state.showError = false
    } else {
      this.state.showError = true
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poemText} onChange={this.handleChange} />
        {this.state.showError ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : <div></div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
