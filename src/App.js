import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Components/Login"
import Inicio from "./Components/Inicio"

class App extends Component {
constructor(props) {
        super(props);
        localStorage.setItem('User',"Martin9958");
        localStorage.setItem('Password',"12345");



    }
  render() {
    return (
        <Router>
            <div>
                <div className="App">
                    <header className="App-header">

                        {localStorage.getItem('IsLoggedIn')==="true"
                                         ? <li> <Route exact path="/" component={Inicio}/></li>
                                         : <li><Route exact path="/" component={Login}/></li>
                        }
                    </header>
                </div>

            </div>
        </Router>
    );
  }
}

export default App;

