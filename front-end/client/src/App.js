import logo from './logo.svg';
import './CSS/App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import UserContract from './UserContract';
 

function App() {
  return (
  <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/usersContract/:id">
              <UserContract/>
            </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
