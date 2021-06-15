import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Home from './Components/home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
       <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
