import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TaskBar from './components/taskbar'
import TaskList from './components/tasklist'

class App extends Component {
  render() {
    return (
<div>
  <Header/>
  <TaskBar/>
  <TaskList/>
</div>
    );
  }
}

export default App;
