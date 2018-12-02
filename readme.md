# Project Overview

## Project Links
####[HEROKU LINK](https://herokuchatrandom.herokuapp.com/)
####[Project Repo](https://git.generalassemb.ly/HarringtonR/project-4)
####[Project Repo testing](https://github.com/HarringtonR/project-4-testing)
####[Hosting and Video service used](https://www.simplewebrtc.com/)

## Project Schedule

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Due Date | Deliverable | Status
|:---:|---|---|:---:|
|Day 1| Nov 20 | Prject Worksheet, Project Approval, Wireframes, Priority Matrix, Determine Functional Components | Complete
|Day 2| Nov 21 | Basic Layout in Code: Landing Page, Video Page, Nav | Complete
|Day 3| Nov 23/24 | Basic Functionality: Firebase + Video research | Complete
|Day 4| Nov 25/26 | Linking Firebase to Video to Current User | N/A
|Day 3| Nov 27 | Video Linked Randomly with any user | Complete
|Day 4| Nov 28 | Unexpected problems--- CSS |  Complete
|Day 5| Nov 29 | CSS, Problem Sovling, Possibly Post-MVP  | Complete
|Day 6| Nov 30 | POST MVP Chat | Complete
|Day 7| Dec 1 | Final Touches, Presentation Prep | Complete
|Day 7| Dec 2 | Deploy App | Complete
|Day 7| Dec 3 | Present | Incomplete


## Project Description

My App is a cover of chatroulette with an added feature. Where users will be randomly connected to other online users. By Clicking next they will randomly connect to another available user. However there is a 60 second timer on all conversations. Chats can end by a user clicking the end button upon which they will be reconnected to another user, they can wait for the timer to expire, or they can add more time to stay. However time is user specific. So you have to make sure your partner is adding more time if you want to stay and chat.


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Wireframe 1-Main Page](https://imgur.com/p4ubzLp "Wireframe")

[Wireframe 1-Main Page Option 2](https://imgur.com/3dGH0yd "Wireframe")

[Wireframe 2](https://imgur.com/xq7JNU4 "Wireframe")

[Wireframe 3](https://imgur.com/q3lat2u "Wireframe")

[Wireframe 4](https://imgur.com/11BW0U2 "Wireframe")

[ERD] - Firebase

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Priority Matrix](https://imgur.com/G8OfJif "Priority Matrix")


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Video Rendering with local users camera/ camera access
- As Mobile as Possible
- 1 minute timer on video
- **Link one user to another random user.**
- **Have everyone in class be able to randomly connect to each other**


#### PostMVP 

- Chat under video
- CSS+
- More storage of information from users -Times /Connection history
- Work on other project


## Architectural Design

Define the the React components and the architectural design of your app.

[React Architectural Design](https://imgur.com/7oEldqm)


### Functional Components and Technologies Used

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### Front-end Technologies: React, NPM packages

#### Back-end Technologies: Express, SimpleWebRTC

| Component | Description | 
| --- | --- |  
| App | This will render the UI | 
| Switcher | will handle all the routes | 
| Log-in Page | log in for existing users | 
| Video | Where connect/disconnect and video is controlled| 
| Nav | details and necessary links at bottom of app.| 
| Timer | Will disconnect video after 60 seconds | 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframing| L | 1 hrs | 1hrs | 1hrs |
| App | L | 3 hrs | 1hrs | hrs |
| Switcher | L | 3 hrs| 1hrs | hrs |
| Create User | L | 5 hrs | 0hrs | 0hrs |
| Login Page/ Authentication | H | 8 hrs | 0hrs | 0hrs |
| Firebase Login/User Auth | H | 10 hrs| 0hrs | 0hrs |
| Rendering Video | H | 10 hrs| 5hrs | hrs |
| Linking Video | H | 8 hrs| 10hrs | hrs |
| Randomizing Connections | H | 8 hrs| 10hrs | hrs |
| Navigation | L | 4 hrs | 2hrs | hrs |
| Chats-PMVP | L | 10 hrs | 2hrs | hrs |
| CSS| L | 5hrs | 15hrs | hrs |
| Total | H | 75 hrs| 52hrs | hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | --- |  
| compondentDidMount | Loading video and grabing user information| 

## Additional Libraries
####[Hosting and Video service used - SIMPLEWEBRTC](https://www.simplewebrtc.com/)


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
            <SWRTC.Room name="waiting">
                  {({room, peers, localMedia, remoteMedia}) => {
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
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
 -Had massive difficulties trying to style the imported componentents from SimplewebRTC.
 -Using the simpleWebRTC I no longer was required to user firebase for user log in.
 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
- using prebuilt components
- css - connection issues