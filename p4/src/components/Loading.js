import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Loading extends Component {
  state = {
    fireRedirect: false
  }


  componentDidMount(){
    setTimeout(() => {
      this.setState({
        fireRedirect: true
      })
    }, 3000)
}

  render() {
    return (
      <div className="Loading">
        <h1> ChatRoulette </h1>
         {this.state.fireRedirect
          ? <Redirect push to={'/Home'} />
          : ''}
    </div>
    );
  }

}

