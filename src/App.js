import React from 'react'
import Home from './components/Home'
import "./styles/app.css"
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
     
      </Router>
    </div>
  )
}

export default App
