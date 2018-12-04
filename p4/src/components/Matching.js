import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Provider } from "react-redux";
import * as SWRTC from "@andyet/simplewebrtc";

const store = SWRTC.createStore();
window.store = store;
const API_KEY = 'eb79cb49def49b161474d1cf';
const config_Url = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}



export default class Matching extends Component {
  state = {
    room: null,
    users: null,
    availableUsers: [],
    fireRedirect: false
  }

  componentDidMount() {
    this.newRoom();
  }


  newRoom() {
    axios.post('/videoPage', {
      roomname: makeid()
    })
  }

  render() {
    const { userData } = this.props;
    return (
      <Provider
    store={store}
    userData={userData}
    roomName={"waiting room"}
    className= 'launch'
     >
      <SWRTC.Provider configUrl={config_Url}>
        {/* Render based on the connection state */}
        <SWRTC.Connecting className='connecting'>
          <h1>Connecting...</h1>
        </SWRTC.Connecting>
          <SWRTC.Connected className='connected'>
              <SWRTC.RequestUserMedia audio video auto />
                <SWRTC.Room name="waiting">
                  {({peers}) => {
                     if (peers.length === 1) {
                        return <Redirect push to={`/VideoPage`} />
                      } else {
                        return (
                          <div className="Matching">
                             <h1>Chat will begin when another user is available</h1>
                          </div>);
                       }
                  }}
             </SWRTC.Room>
         </SWRTC.Connected>
      </SWRTC.Provider>
    </Provider>
    );
  }
}
