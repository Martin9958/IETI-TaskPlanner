import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './Components/Inicio';
import {Login} from "./Components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
      constructor(props) {
            super(props);
            localStorage.setItem('username', 'Martin9958');
            localStorage.setItem('password', '12345');
      }


      render() {

              return (
                  <Router>
                      <div className="App">


                          <br/>
                          <br/>

                          {localStorage.getItem('IsLoggedIn')==="true"
                               ? <li><Link to="/">Inicio</Link> <Route path="/todo" component={Inicio}/></li>
                               : <li><Link to="/">Login</Link> <Route exact path="/" component={Login}/></li>
                           }
                      </div>
                  </Router>
              );
          }



}
export default App

