import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Loading extends Component {

  render() {
    return (
      <div className="Home">
        <h1> Welcome to ChatRoulette </h1>
        <h2><Link to ='./Welcome'>Start Video Chat </Link></h2>
        <div>
          <h4> Info </h4>
          <p>Click above to Video Chat. To continue conversation turn off the timer. To find a new user click the red button.</p>
        </div>
    </div>
    );
  }

}

