import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as UUID from "uuid";

export default class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <h1>Welcome to ChatRandom</h1>
         <h2><Link to={`/VideoPage`}>Connect to Video</Link></h2>

      </div>
    )
  }
}

