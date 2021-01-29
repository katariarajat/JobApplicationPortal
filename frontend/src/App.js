import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/Users/UsersList'
import Home from './components/Common/Home'
import Register from './components/Common/Register'
import Navbar from './components/templates/Navbar'
import Profile from './components/Users/Profile'
import CreateJob from './components/Common/CreateJob'
import Jobs from './components/Common/jobs'
import Apply from './components/Common/apply'



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/createjob" component={CreateJob} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/apply/:title" component={Apply} />

      </div>
    </Router>
  );
}

export default App;
