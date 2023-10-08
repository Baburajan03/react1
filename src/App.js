// Day 6 : REACT ROUTER

// WITHOUT REACT ROUTER

// import React, {useState} from 'react'

// function Home(){
//   return(
//     <div>
//       <h2>Notes App</h2>
//     </div>
    
//   )
// }

// function Notes(){
//   return(
//     <div>
//       <h2>Notes Component</h2>
//     </div>
    
//   )
// }

// function Users(){
//   return(
//     <div>
//       <h2>Users App</h2>
//     </div>
    
//   )
// }
// function App() {
//   const [page,setPage] = useState('home')
  
//   const content = () =>{
//     if(page == 'home'){
//       return <Home />
//     } else if (page == 'notes') {
//       return <Notes/>
//     } else if (page == 'users') {
//       return <Users />
//     }
//   };

//   const toPage = (page) => (event) => {
    
//     event.preventDefault()
//     setPage(page)
//   }
  
//   const padding ={padding : 10}
//   return (
//     <div>
//       <div>
//         <a href= ' ' style = {padding} onClick = {toPage('home')} >home</a>
//         <a href= ' ' style = {padding} onClick = {toPage('notes')} >notes</a>
//         <a href= ' ' style = {padding} onClick = {toPage('users')} > Users</a>
//       </div>

//       {content()}
//     </div>
//   )
// }

// export default App


// TOPIC : WITH ROUTER

// import React, {useState} from 'react'
// import {Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// function Home(){
//   return(
//     <div>
//       <h2>Notes App</h2>
//     </div>
    
//   )
// }

// function Notes(){
//   return(
//     <div>
//       <h2>Notes Component</h2>
//     </div>
    
//   )
// }

// function Users(){
//   return(
//     <div>
//       <h2>Users App</h2>
//     </div>
    
//   )
// }
// function App() {
//   const [page,setPage] = useState('home')
  
//   const padding ={padding : 10}
//   return (
//       <Router>
//       <div>
//         <Link to ='/' style = {padding} >home</Link>
//         <Link to ='/notes' style = {padding}>notes</Link>
//         <Link to = '/users' style = {padding}>users</Link>
//       </div>

//       <Routes>
//         <Route path = '/users' element = {<Users/>} />
//         <Route path = '/notes' element = {<Notes/>} />
//         <Route path = '/' element = {<Home/>} />
//       </Routes>
      
//       </Router>
//   )
// }

// export default App

// TOPIC : USING PASSING PARAMETERS

import React, {useState} from 'react'
import {Link, BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

function Home(){
  return(
    <div>
      <h2>Notes App</h2>
    </div>
    
  )
}

function Note({notes}){
  const id = useParams().id
  const note = notes.find(n => n.id === Number(id))
  return(
    <div>
      <h2>{note.content}</h2>
    </div>
    
  )
}

function Notes({notes}){
  return(
    <div>
      <h2>Notes</h2>
      <ul>
        {
          notes.map(note =>
            <li Key= {note.id}><Link to={`/notes/${note.id}`}>{note.content}</Link></li>
        )
        }
      </ul>
    </div>
    
  )
}

function Users(){
  return(
    <div>
      <h2>Users App</h2>
    </div>
    
  )
}
function App() {

  const notes = [
    {
      id : 1,
      content : 'Javascript'
    },
    {
      id : 2 ,
      content : 'ReactJS'
    },
    {
      id : 3,
      content : 'NodeJS'
    },
  ];  
  
  
  const padding ={padding : 10}
  return (
      <Router>
      <div>
        <Link to ='/' style = {padding} >home</Link>
        <Link to ='/notes' style = {padding}>notes</Link>
        <Link to = '/users' style = {padding}>users</Link>
      </div>

      <Routes>
        <Route path='/notes/:id' element = { <Note notes = {notes}/>}/>
        <Route path = '/users' element = {<Users/>} />
        <Route path = '/notes' element = {<Notes notes = {notes}/>} />
        <Route path = '/' element = {<Home/>} />
      </Routes>
      
      </Router>
  )
}

export default App

