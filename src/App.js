//  function App()  {
//   console.log('hello from component')
//   return (
//     <div><p>Hello world</p></div>
//   );
// }
// export default App;

// import { Component } from "react"

// import React from 'react'

// function Hello(){
//   return(
//     <div>
//       <p>Hello world!</p>
//     </div>   
//   )
// }
// function App() {
//   return (
//     <div>
//      <p>Greetings</p>
//      <Hello />
//       </div>  
//   )
// }
// export default App

// day 3

// import React from 'react'

// function App(props) {
//   const {notes} = props
//   console.log(notes)
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].contents}</li>
//         <li>{notes[1].contents}</li>
//         <li>{notes[2].contents}</li>
//         <li>{notes[3].contents}</li>
//         <li>{notes[4].contents}</li>
//       </ul>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function App(props) {
//   const {notes} = props
 
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <li key ={note.id}>{note.contents}</li>)}
//       </ul>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function Note({note}){

//   return <li >{note.contents}</li>
// }

// function App({notes}) {
//   // const {notes} = props
 
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key ={note.id} note = {note}/>)}
//       </ul>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function Note({note}){
//   // 1. using if

//   // if(note.important){
//   //   return <li >{note.contents + '★'}</li>
//   // }
//   // else{
//   //   return <li >{note.contents}</li>
//   // }

//   // 2.using ternary operator
//   // return <li >{note.important? note.contents + '★' : note.contents}</li>

//   // 3.using logical operator
//   return(
//   <li>
//     {note.contents} {note.important && '★'}
//   </li>
//   )
// }

// function App({notes}) {
//   // const {notes} = props
 
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key ={note.id} note = {note}/>)}
//       </ul>
//     </div>
//   )
// }

// export default App

// Topic : event handling
// import React from 'react'

// function Note({note}){
  
//   return(
//   <li>
//     {note.contents} {note.important && '★'}
//   </li>
//   )
// }

// function App({notes}) {
//   // const {notes} = props

//   const addNote = (event) => {
//     event.preventDefault();
//     console.log(event.target)
//   }
 
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key ={note.id} note = {note}/>)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input />
//         <button type='submit'>Save</button>
//       </form>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// function Note({note}){
  
//   return(
//   <li>
//     {note.contents} {note.important && '★'}
//   </li>
//   )
// }

// function App({notes}) {
//   // const {notes} = props

//   const addNote = (event) => {
//     event.preventDefault();
//     console.log(event.target)
//   }
 
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key ={note.id} note = {note}/>)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input />
//         <button type='submit'>Save</button>
//       </form>
//     </div>
//   )
// }

// export default App

// Topic : class commponent

// import { Component }  from "react";

// class App extends Component {
// render() {
//   return <div>Hello World</div>
// }
// }

// export default App

// TOPIC : PASSING PROPS IN FUNCTION COMPONENT

// import React from 'react'

// function Hello(props){
//   return <div>Hey! {props.name}</div>
// }

// function App() {
//   return (
//     <div>
//       <Hello  name = {'babu'}/>
//     </div>
//   )
// }

// export default App

// TOPIC : PASSING PROPS IN CLASS Component

// import { Component }  from "react";

// class Hello extends Component{
//   render(){
//     const {name} = this.props
//     return <div>
//       {/* Hello! {this.props.name} */}
//       Hello! {name}
//     </div>
//   }
// }

// class App extends Component {
// render() {
//   return <div>
//     <Hello name = {'babu'}/>
//   </div>
// }
// }
// export default App 

// TOPIC: STATEFUL COMPONENT


// import React, { Component } from 'react'


// export class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count : 0,
//     };
//   }
  
//   handleClick = () => {
//     this.setState((prevState) => ({
//       count : prevState.count + 1,
//     }));
//   }
  
//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>plus</button>
//         <button>Minus</button>
//         <button>Zero</button>
//       </div>
//     )
//   }
// }

// export default App

// TOPIC : REUSABLE COMPONENT

import React, { Component } from 'react'
import Hello from './Components/Hello'


export class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
      </div>
    )
  }
}

export default App
