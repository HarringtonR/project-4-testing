import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import VideoPage from './components/VideoPage';
import Matching from './components/Matching';
import Loading from './components/Loading';
import Home from './components/Home';

class App extends Component {


  render() {
    return (
        <div className="App">
          <Switch>
            <Route path= '/VideoPage' component = { VideoPage } />
            <Route path= '/Matching' component = { Matching } />
            <Route path= '/Home' component = { Home } />
            <Route path= '/' component={ Loading } />
          </Switch>
      </div>
    );
  }

}

export default App;
