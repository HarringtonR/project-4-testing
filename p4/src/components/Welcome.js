import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

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
    axios.get('/VideoPage')
      .then(res => {
        this.setState(prevState => ({
          room: res.data.data[0].roomname
        }))
        console.log(`this is the room name --> ${this.state.room}`)
      }).then(
        axios.get(`https://api.ipify.org`)
        .then((res) => {
          let user = res.data
          this.setState({
              users: user,
            })
          this.state.availableUsers.push(this.state.users)
            console.log(this.state.users)
            let numberOfUsers = this.state.availableUsers.length
            console.log(numberOfUsers)
        }))
    this.redirect()
  }


  newRoom(){
    axios.post('/videoPage',  {
            roomname: makeid()
            })
      }

  redirect() {
    if (this.state.availableUsers.length > 1) {
      this.setState({
        fireRedirect: true
      })
    } else {
      console.log('waiting')
    }
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
  render() {
    return (
      <div className="Welcome">
        <h1>Waiting Room</h1>
         <h2><Link to={`/VideoPage`}>Chat will begin when there is a available user</Link></h2>
         {this.state.fireRedirect
          ? <Redirect push to={`/VideoPage`} />
          : ''}
      </div>
    )
  }
}
