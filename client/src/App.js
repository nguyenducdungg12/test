import React from 'react';
import {BrowserRouter  as Router,Switch,Route } from 'react-router-dom'
import './App.css'
import './Responsive.css'
import AdminPage from './Component/Admin/Admin'
import Client from './Client'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={AdminPage}/>
        <Route path='/' component={Client}/>
      </Switch>
    </Router>
  )
}

export default App
