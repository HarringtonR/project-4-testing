import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import VideoPage from './components/VideoPage';
import Welcome from './components/Welcome';
import Loading from './components/Loading';

class App extends Component {


  render() {
    return (
        <div className="App">
          <Switch>
            <Route path= '/VideoPage' component = { VideoPage } />
            <Route path= '/Welcome' component = { Welcome } />
            <Route path= '/' component={ Loading } />
          </Switch>
      </div>
    );
  }

}

export default App;
