import * as React from "react";
import './App.css';
import Home from './pages/Home'

import {
  useRoutes, 
  NavLink} from 'react-router-dom'

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        
      ]
    }
  ]);

  return element;
}

export default App;
