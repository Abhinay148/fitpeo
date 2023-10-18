import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  const[OpenSidebarToggle,setOpenSidebarToggle]=useState(false)
  
  const OpenSidebar= () =>{
    setOpenSidebarToggle(!OpenSidebarToggle)
  }
  return (
    <div className='container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar OpenSidebarToggle={OpenSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App;
