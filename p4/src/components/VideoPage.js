import React from 'react';
import { Provider } from "react-redux";
import * as SWRTC from "@andyet/simplewebrtc";
import { Actions, Selectors, GridLayout, Video } from "@andyet/simplewebrtc";
import { StyledUIContainer, StyledMainContainer, StyledVideoContainer } from './Styles.js';
import axios from 'axios';


const API_KEY = 'eb79cb49def49b161474d1cf';

const config_Url = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;
const store = SWRTC.createStore();
window.store = store;
window.actions = Actions;
window.selectors = Selectors;
const params = new URLSearchParams(window.location.search);


class VideoPageController extends React.Component {
  state = {
    room: null
  }
 componentDidMount(){
    axios.get('/videoPage')
      .then( res => {
        this.setState(prevState => ({
          room: res.data.data[0].roomname
        }))
      })

 }

  renderMyRoom = () => {
    const ROOM_NAME = this.state.room
  return (
    <SWRTC.Room name={ROOM_NAME}>
                  {({room, peers, localMedia, remoteMedia}) => {
                     if (!room.joined) {
                        return <h1>Joining room...</h1>;
                      }
                        const remoteVideos = remoteMedia.filter(m => m.kind === 'video');
                        const localVideos = localMedia.filter(m => m.kind === 'video');
                        console.log(this.state.room)
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



// renderWaitingRoom() {
//   console.log("waiting room")
//    return this.renderMyRoom(this.state.roomName)
//   //this.setState({ waitingid: null})

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
    roomName={params.get('room')}
     >
      <SWRTC.Provider configUrl={config_Url}>
        {/* Render based on the connection state */}
        <SWRTC.Connecting>
          <h1>Connecting...</h1>
        </SWRTC.Connecting>
          <SWRTC.Connected>
            <h1>Connected!</h1>
              <SWRTC.RequestUserMedia audio video auto />
              { this.renderMyRoom() }
        </SWRTC.Connected>
      </SWRTC.Provider>
    </Provider>
    );
  }
}
export default VideoPageController;
