import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import User from './Components/User'
import "./Styles/App.scss"
import "./Styles/Home.scss"
import "./Styles/User.scss"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App