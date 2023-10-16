// DAY 8

// TOPIC : PROPS DRILLING

// import React from 'react'
// function GrandChildComponent(props){
//   return(
//     <div>
//       <h3>GrandChildComponent</h3>
//       <p>{props.message}</p>
//     </div>
//   )
// }

// function ChildComponent(props){
//   return(
//     <div>
//       <h2>Child Component</h2>
//       <p>{props.message }</p>
//       <GrandChildComponent message={props.message}/>
//     </div>
//   )
// }
// function App() {
//   // parent component
//   const message = "Hello, Child!"

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent message = {message}/>
//     </div>
//   )
// }

// export default App

// TOPIC: AVOIDING PROPS DRILLING USING UseContext(Hook) method

// import React, { createContext, useContext, useState } from 'react'

// // create a context
// const MssageContext = createContext();

// function GrandChildComponent(){
//   const message = useContext(MssageContext)
//   return(
//     <div>
//       <h3>Grand Child Component</h3>
//       <p>{message}</p>
//     </div>
//   )
// }

// function ChildComponent(){
//   const message = useContext(MssageContext)
//   return(
//     <div>
//       <h2>Child Component</h2>
//       <p>{message}</p>
//       <GrandChildComponent/>
//     </div>
//   )
// }

// function App() {
// //  const [message,setMessage] = useState('Hello from App')
//  const message = "HELLO FROM APP"
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <MssageContext.Provider value={message} >
//     <ChildComponent/>
//       </MssageContext.Provider>
//     </div>
//   )
// }

// export default App

// TOPIC: SESSION TASK- PROFILE NAME CHANGES

import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const profileContext = createContext()

function Profile(){
  const{profileName,setProfileName} = useContext(profileContext)
  
  let onChangeEvent = (event) => {
    setProfileName(event.target.value)
    // console.log(event.target.value)
  }

  return(
    <div>
      <h2>Profile Name : {profileName}</h2>
      <input type = 'text' value = {profileName} onChange={onChangeEvent}/>

      
    </div>
  )
}

function App() {

  const [profileName,setProfileName] = useState('')
  return (
    <div>
      <profileContext.Provider value ={{profileName,setProfileName}}>
        <Profile/>
      </profileContext.Provider>
    </div>
  )
}

export default App