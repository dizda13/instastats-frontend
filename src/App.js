import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Login from './Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet" />
        <Login></Login>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        {/*<Route exact path="/" component={User}/>*/}
      </div>
    );
  }
}

export default App;
