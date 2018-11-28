import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Loading extends Component {

  render() {
    return (
      <div className="Home">
        <h1> Welcome to ChatRoulette </h1>
        <h2><Link to ='./Matching'>Start Video Chat </Link></h2>
        <div className ='info'>
          <h4> Info </h4>
          <p>Click above to Video Chat. To continue conversation use the "add 30 seconds button" to continue adding time. To find a new user click skip.</p>
        </div>
    </div>
    );
  }

}

