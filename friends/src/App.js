import React from 'react'
import { Router, Route, Switch, Link } from 'react-router-dom';
import login from './components/Login.js';
import PrivateRoute from './components/privateRoute';
import FriendList from './components/friendsList';

import './App.css';

function App() {

const logout = () => { localStorage.removeItem('token')
};

return (
  <Router>
   <div className="App">
      <h1>Your Friends</h1>
  <div className='link1'>
  <Link to='/login' component={login}>Login here</Link>
  </div>

  <div>
    {localStorage.getItem('token') && <Link to="/protected"/>}
      <Link onClick={logout}>Logout here</Link>
  </div>
  <Switch>
    <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={login} />
          <Route component={login} />
  </Switch>
  </div>
  </Router>
)};

export default App;