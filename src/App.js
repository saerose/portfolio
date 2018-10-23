import React, { Component } from 'react';

// Import components 🌈
import Landing from './components/landing';
import About from './components/about';
import Portfolio from './components/porfolio';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
