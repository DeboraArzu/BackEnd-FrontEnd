import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <main style={{marginTop:'64px'}}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
