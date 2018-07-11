import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/notes/')
      .then(response => {
        // console.log(response.data);
        this.setState({notes: response.data})
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Notes!</h1>
        </header>
        <div>
          { this.state.notes.map((note, index) => {
            return (
              <div key={index}>
                <p>Title: <strong>{note.title}</strong></p>
                <p>{note.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
