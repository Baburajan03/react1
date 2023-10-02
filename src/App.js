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

// import React, { Component } from 'react'
// import Hello from './Components/Hello'


// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello/>
//       </div>
//     )
//   }
// }

// export default App

// Day 5
// TOPIC : USESTATE HOOK

// import React, {useState} from 'react'

// function App() {

//   const [counter,setCounter] = useState(0)

//   setTimeout( () => setCounter (counter + 1),1000)

//   return (
//     <div>{counter}</div>
//   )
// }

// export default App


//  import React, {useState} from 'react'

// function App() {

//   const [counter,setCounter] = useState(0)

//   const handleEvent = () => {
//     setCounter(counter + 1)
//   }
  
//   const handleEventMinus = () => {
//     if(counter >0){
//     setCounter(counter - 1)
//   }}

//   const handleEventzero = () => {
//     setCounter(0)
//   }


//   return (
//     <div>
//       <div>{counter}</div>
//     <button onClick = {handleEvent} >Plus</button>
//     <button onClick = {handleEventMinus}>Minus</button>
//     <button onClick = {handleEventzero} >Reset</button>
//     </div>
//   )
// }

// export default App

// TOPIC : PASSING EVENTS FROM CHILD TO PARENT COMPONENTS

// import React, {useState} from 'react'

// const Display = (props) => {
//   return(
//   <div>{props.counter}</div>
// )}

// function Button(props){
//   return(
//     <button onClick ={props.handleClick} >{props.text}</button>
//   )

// }


// function App() {

//   const [counter,setCounter] = useState(0)

  

//   const handleEvent = () => {
//     setCounter(counter + 1)
//   }
  
//   const handleEventMinus = () => {
//     if(counter >0){
//     setCounter(counter - 1)
//   }}

//   const handleEventzero = () => {
//     setCounter(0)
//   }


//   return (
//     <div>
//       <Display counter = {counter}/>
//     <Button text = 'plus' handleClick = {handleEvent}/>
//     <Button text = 'Minus' handleClick = {handleEventMinus}/>
//     <Button text = 'Zero' handleClick = {handleEventzero}/>
//     </div>
//   )
// }

// export default App

// TOPIC : UseEffect

// import React,{useState , useEffect} from 'react'

// function App() {
//   const [data,setData] = useState(null)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response => response.json()))
//     .then((data => setData(data)))
//   },[])
//   return (
//     <div>
//       <h1>API DATA</h1>
//       {
//         data ? (
//           <ul>
//       {
//       data.map((items) => <li key = {items.id}>{items.title}</li>  )
//       }
//        </ul>
//         ) : (
//           <p>Loading data...</p>
//         )
//       }
    
   
//     </div>
//   )
// }

// export default App

// TOPIC : PROPS DRILLING
// PASSING PARENT TO NESTED CHILD COMPONENTS, PARENT TO CHILD TO CHILD

// import React from 'react'

// function GrandChildComponent({parentData}){
//   console.log(`from grand child component: ${parentData}`);
//   return(
//     <div>
//       <h3>Grand Child Component</h3>
//     </div>
//   )
// }

// function ChildComponent({parentData}){
//   console.log(`from child component: ${parentData}`)
//   return(
//     <div>
//       <h2>Child Component</h2>
//       <GrandChildComponent parentData = {parentData}/>
//     </div>
//   )
// }

// function App() {
//   const parentData = 'Hello from Parent'
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent parentData = {parentData} />
//       </div>
//   )
// }

// export default App

// TOPIC : PASSING DATA FROM CHILD COMPONENT TO PARENT COMPONENT

import React,{useState} from 'react'

function ChildComponent({onMessage}) {
  const message = 'Hello from Child'

  const handleClick =() =>{
    onMessage(message)
  }
  return(
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Message to the parent</button>
    </div>
  )
}

function App() {
  const [message, setMessage] = useState('')

  const handleMessage = (data) => {
    setMessage(data)
  }
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from child component : {message}</p>
      <ChildComponent onMessage={handleMessage}/>
    </div>
  )
}

export default App