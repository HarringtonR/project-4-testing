import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Provider } from "react-redux";
import * as SWRTC from "@andyet/simplewebrtc";

const store = SWRTC.createStore();
window.store = store;

const API_KEY = 'eb79cb49def49b161474d1cf';

const config_Url = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}



export default class Welcome extends Component {
  state = {
    room: null,
    users: null,
    availableUsers: [],
    fireRedirect: false
  }

  componentDidMount() {
    this.newRoom();
  }


  newRoom(){
    axios.post('/videoPage',  {
            roomname: makeid()
            })
      }





  //if there are two users fire a redirect to the next page
  // axios.post('/Welcome',  {
  //     users: this.state.users
  //   })
  //    console.log(this.state.users)

  //posting null into chat room... will i need to link tables for users and chatrooms and delete them
  //idea being to add two users and when they disconnect to delete them from the table. or not.


  // if(peers.length > 1){
  //       this.newRoom()
  //     }
  // render() {
  //   return (
  //     <div className="Welcome">
  //       <h1>Waiting Room</h1>
  //        <h2><Link to={`/VideoPage`}>Chat will begin when there is a available user</Link></h2>
  //        {this.state.fireRedirect
  //         ? <Redirect push to={`/VideoPage`} />
  //         : ''}
  //     </div>
  //   )
  // }


//   renderWaitingRoom() {
//   console.log("waiting room")
//  //     const ROOM_NAME = this.state.room
//   return (
//     <SWRTC.Room name="waiting">
//                   {({room, peers, localMedia, remoteMedia}) => {
//                      if (peers.length == 1) {

//            <Redirect push to={`/VideoPage`} />

//                       } else {
//                         return (<div className="Welcome">
//                     <h1>Waiting Room</h1>
//                      <h2><Link to={`/VideoPage`}>Chat will begin when there is a available user</Link></h2>

//                   </div>);
//                       }
//              }}

//            </SWRTC.Room>
//   );

// }

// renderNewRoom() {
//   console.log("new room fool")
//    // waitingid = ROOM_NAME;
//                //this.setState({ waitingid: new_room})
//   return this.renderMyRoom(this.name)
// }



// {this.state.roomName ? this.renderWaitingRoom() : this.renderNewRoom()
//               }
  render() {
    const { userData } = this.props;
    return (
      <Provider
    store={store}
    userData={userData}
    roomName={"waiting room"}
     >
      <SWRTC.Provider configUrl={config_Url}>
        {/* Render based on the connection state */}
        <SWRTC.Connecting>
          <h1>Connecting...</h1>
        </SWRTC.Connecting>
          <SWRTC.Connected>
            <h1>Connected!</h1>
              <SWRTC.RequestUserMedia audio video auto />
                  <SWRTC.Room name="waiting">
                  {({room, peers, localMedia, remoteMedia}) => {
                     if (peers.length == 1) {

                        return <Redirect push to={`/VideoPage`} />

                      } else {
                        return (<div className="Welcome">
                    <h1>Waiting Room</h1>
                     <h2><Link to={`/VideoPage`}>Chat will begin when there is a available user</Link></h2>

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
