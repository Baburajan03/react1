import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const notes = [
   { id : 1,
    contents : 'working with lists',
    important : true
   },
   {
    id : 2,
    contents : 'usage of keys',
    important : false
   },
   {
    id : 3,
    contents : 'conditional rendering',
    important : true
   },
   {
    id : 4,
    contents : 'handling events',
    important : true
   },
   {
    id : 5,
    contents : 'props vs state',
    important : false
   }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes ={ notes}/>)