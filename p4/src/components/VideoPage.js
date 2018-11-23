import React from 'react';
import { Provider } from "react-redux";
import * as SWRTC from "@andyet/simplewebrtc";
import { Actions, Selectors, PeerList, GridLayout, Video } from "@andyet/simplewebrtc";
import { StyledUIContainer, StyledMainContainer, StyledVideoContainer } from './Styles.js';
import axios from 'axios';


const API_KEY = 'eb79cb49def49b161474d1cf';

const config_Url = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;
const store = SWRTC.createStore();
const ROOM_NAME = makeid();
window.store = store;
window.actions = Actions;
window.selectors = Selectors;
const params = new URLSearchParams(window.location.search);



function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

let waitingid = null;


class VideoPageController extends React.Component {

  state = {
    waitingid: null,
    roomName: null
  }

componentDidMount(){
   axios.get(`/videoPage`)
      .then((res) => {
        const chatroom = res.data.data[0];
        // console.log(chatroom)
        this.setState({
          waitingid: chatroom.waitingid,
          roomName: chatroom.roomname,
        })
      })
}
  renderMyRoom = (name) => {
  return (
    <SWRTC.Room name={name}>
                  {({room, peers, localMedia, remoteMedia}) => {
                     if (!room.joined) {
                        return <h1>Joining room...</h1>;

                      }
                        const remoteVideos = remoteMedia.filter(m => m.kind === 'video');
                        const localVideos = localMedia.filter(m => m.kind === 'video');
                        console.log(room.providedName)
                        console.log()
                       return (
                    <StyledUIContainer>
                      <StyledMainContainer>
                        <StyledVideoContainer>

                          <GridLayout
                            className='videogrid'
                            items={[...localVideos, ...remoteVideos]}
                            renderCell={(item) => (<Video media={item} />)}
                          />
                      </StyledVideoContainer>
                     </StyledMainContainer>
                    </StyledUIContainer>
                )
             }
           }
           </SWRTC.Room>
  );
}

renderWaitingRoom() {
  console.log("waiting room")
   return this.renderMyRoom(waitingid)
   waitingid = null;
  //this.setState({ waitingid: null})

}

renderNewRoom() {
  console.log("new room fool")
   const new_room = ROOM_NAME
   waitingid = ROOM_NAME;
               //this.setState({ waitingid: new_room})
                return this.renderMyRoom(new_room)
}

renderRoom() {
  if (this.state.waitingid) {

  }
}

  render() {
   // console.log("test", this.state.waitingid)
    const { configUrl, userData } = this.props;
    return (
      <Provider
    store={store}
    userData={userData}
    roomName={params.get('room')}
     >

      <SWRTC.Provider configUrl={config_Url}>
        {/* Render based on the connection state */}
        <SWRTC.Connecting>
          <h1>Connecting...</h1>
        </SWRTC.Connecting>
          <SWRTC.Connected>

            <h1>Connected!</h1>
              {/* Request the user's media */}
              <SWRTC.RequestUserMedia audio video auto />

              {waitingid ? this.renderWaitingRoom() : this.renderNewRoom()
              }
            }



        </SWRTC.Connected>
      </SWRTC.Provider>
    </Provider>
    );
  }
}
export default VideoPageController;
