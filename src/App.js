import * as React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home'
import Nft from './pages/Nft'
import Activities from './pages/Activities'

import {
  BrowserRouter as Router,
  useRoutes, 
  NavLink} from 'react-router-dom'
      
function Pages() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [        
      ]
    },
    {
      path: "/nft",
      element: <Nft />,
      children: [        
      ]
    },
    {
      path: "/activities",
      element: <Activities />,
      children: [        
      ]
    }
  ]);

  return element;
}

function App (){
  return (
    <Router>
      <Pages />
    </Router>
  )
}

export default App;
