import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'
// import './styles/board.css'
// import './styles/box.css'
// import './styles/buttons.css'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Scoreboard} />
          <Route path='/board' component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;