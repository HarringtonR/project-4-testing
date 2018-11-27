import React from 'react';
import { Provider } from "react-redux";
import { Link } from 'react-router-dom';
import * as SWRTC from "@andyet/simplewebrtc";
import { Actions, Selectors, Video, GridLayout, ChatList, ChatInput } from "@andyet/simplewebrtc";
import axios from 'axios';


const API_KEY = 'eb79cb49def49b161474d1cf';
const config_Url = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;
const store = SWRTC.createStore();
window.store = store;
window.actions = Actions;
window.selectors = Selectors;
const params = new URLSearchParams(window.location.search);

// let i = 10;


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


// countDown() {
//     if(i === 10) {
//             setInterval(function () {
//                  return <p>{i--}</p>
//             }, 1000);
//         }
//     }

  renderMyRoom = () => {
    const ROOM_NAME = this.state.room
    // console.log(getMediaTrack());
  return (
    <SWRTC.Room name={ROOM_NAME}>
                  {({room, peers, localMedia, remoteMedia}) => {
                     if (!room.joined) {
                        return <h1>Joining room...</h1>;
                      }
                        const remoteVideos = remoteMedia.filter(m => m.kind === 'video');
                        const localVideos = localMedia.filter(m => m.kind === 'video');
                        // console.log(this.state.room)
                        // console.log(peers.length)
                       return (
                    <div className='StyledUIContainer'>
                      <div className='StyledMainContainer'>
                      <div className ='title'>
                          <button> <Link to='/Welcome'> SKIP </Link></button>
                          <button>OFF</button>
                        </div>
                           <div className='remote'>
                             <GridLayout
                            className='videogridremote'
                            items={[ ...remoteVideos]}
                            renderCell={(item) => (<Video media={item} />)}
                            />
                          </div>
                          <div className='local'>
                            <GridLayout
                              className='videogrid'
                              items={[...localVideos]}
                              renderCell={(item) => (<Video media={item} />)}
                            />
                          </div>
                          <div className='chat'>
                            <div className='StyledChatContainer'>
                              <ChatList
                              room={room.address}
                              className='StyledChatListContainer'
                              renderGroup={({ chats, peer }) => (
                                <div className='StyledMessageGroup' key={chats[0].id}>
                                  <div className ='StyledMessageMetadata'>
                                    <span className='StyledDisplayName'>{peer.displayName ? peer.displayName : 'Anonymous'}</span>
                                  </div>
                                  {chats.map(message => (
                                    <p className='StyledMessage' key={message.id}>{message.body}</p>
                                  ))}
                                </div>
                                    )}
                                  />
                            </div>
                              <div className='StyledChatInputContainer'>
                                    <ChatInput
                                      room={room.address}
                                      placeholder='Send a message...'
                                    />
                              </div>
                          </div>
                     </div>
                    </div>
                )
              }
           }
           </SWRTC.Room>
  );
}

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
              <SWRTC.RequestUserMedia audio video auto />
              { this.renderMyRoom() }
        </SWRTC.Connected>
      </SWRTC.Provider>
    </Provider>
    );
  }
}
export default VideoPageController;
