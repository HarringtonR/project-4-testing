import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../index.css';

export default class Timer extends Component {
  state = {
    fireRedirect: false,
    count: 60
  }

  timer() {
    this.setState({
    count: this.state.count - 1
  })
    if (this.state.count <= 0) {
      this.setState({
        fireRedirect: true
      })
    }
  }

timerAdd(){
  this.setState({
   count: this.state.count + 30
  })

}

  componentDidMount() {
    setInterval(() => this.timer(), 1000);
  }

  render() {
    return (
      <div className="Timer">
      <h1>{this.state.count}</h1>
      <button onClick = {() =>this.timerAdd()}> Add 30 seconds</button>
      {this.state.fireRedirect
          ? <Redirect push to={'/Home'} />
          : ''}
    </div>
    );
  }
}
