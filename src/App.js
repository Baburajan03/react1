// TOPIC : UseRef  HOOK : to create a mutable reference to an element or a value that persits

// Example 1

// import React from 'react'
// import { useRef } from 'react';

// function App() {
//   const inputRef = useRef(null);
//   let handleButton = () =>{
//     inputRef.current.focus()
//     // console.log(inputRef.current)
//   }
//   return (
//     <div>
//       <input type = 'text' ref={inputRef}/>
//       <button onClick = {handleButton}>Focus Input</button>
//     </div>
//   )
// }

// export default App

// Example 2

// import React, { useRef } from 'react'
// import { useState } from 'react'

// function App() {
//   const inputRef = useRef(null)
//   const [text,setText] = useState('no text')

//   let handleButton = ()=>{
//       let value = inputRef.current.value
//       setText(value)
//   }
//   return (
//     <div>
//       <input type ='text' ref = {inputRef}/>
//       <button onClick={handleButton}>Get Text</button>
//       <p>Entered Text: {text}</p>
//     </div>
//   )
// }  

// export default App

// Example 3

// import React, { useEffect, useRef } from 'react'

// function App() {
 
//   const inputRef = useRef(null)
//   useEffect(() =>
//   {
//     inputRef.current.focus()
//   }, [])
//   return (
//     <div>
//       <input type='text' ref={inputRef} />
//     </div>
//   )
// }

// export default App

//   Example 4

// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// function App() {

//     const [count,setCount] = useState(0)
//     const previousCountRef = useRef(null)

//     let handleIncrement = () =>{
//         previousCountRef.current = count
//         setCount((count) => count + 1)
//     }
//      return (
//     <div>
//         <p>Current Count : {count}</p>
//         <p>Previous Count : {previousCountRef.current}</p>
//         <button onClick = {handleIncrement}>Increment</button>
//     </div>
//   )
// }

// export default App

// TOPIC : useEffect examples
// WITHOUT DEPENDENCY

// import React, { useEffect } from 'react'

// function App() {

//     // this effect runs once change, after the component mounts
// useEffect(() => {
//     console.log('component mounted')
// },[])
//   return (
//     <div>
//         APP COMPONENT
//     </div>
//   )
// }

// export default App

// with single dependency

// import React, { useEffect, useState } from 'react'

// function App() {
//     const [count,setCount] = useState(0)

//     // runs first time
// useEffect(() => {
//     console.log('count:',count)
// },[count])

// let buttonClick = () => {
//     setCount(count +1)
// }
//   return (
//     <div>
//         <p> Count : {count}</p>
//         <button onClick= {buttonClick}>Increment</button>
//     </div>
//   )
// }

// export default App


// TOPIC: useReducer hook : complex state management ( multiple actions or transitions)
// import React from 'react'
// import { useState } from 'react'


// function App() {
//     const [count,setCount] = useState(0)
//   return (
//     <div>
// <p>Count : {count} </p>
// <button onClick = {() => setCount(count +1)}>Increment</button>
// <button onClick = {() => setCount(count -1)}>Decrement</button>
// <button onClick = {() => setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default App

// Example 1

// import React from 'react'
// import { useReducer } from 'react'
// import { useState } from 'react'

// // set initial state
// const initialState = {count : 0}

// function rreducer(state,action){
//     switch (action.type) {
//         case 'Increment' :
//             return {count : state.count + 1};
//         case 'Decrement' :
//             return {count : state.count -1};
//         case 'reset' :
//             return {count : 0};
//         default:
//             throw  new Error();
//     }
// }

// function App() {

// const [state,dispatch]  = useReducer(rreducer,initialState);

//   return (
//     <div>
// <p>Count : {state.count} </p>
// <button onClick = {() => dispatch({type : 'Increment'})}>Increment</button>
// <button onClick = {() => dispatch({type : 'Decrement'})}>Decrement</button>
// <button onClick = {() => dispatch({type : 'reset'})}>Reset</button>
//     </div>
//   )
// }

// export default App


// EXAMPLE 2

// import React, { useReducer } from 'react'

// const initialState = {isActive : false}

// function reducer(state,action){
//     switch(action.type){
//         case 'toggle' :
//             return {isActive : !state.isActive}
//     }
// }

// function App() {

//     const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//         <p>Active : {state.isActive ? 'Yes' : 'No'}</p>
//         <button onClick = {() => dispatch ({type : 'toggle'})}>Toggle</button>
//     </div>
//   )
// }

// export default App






