import React, { Component } from 'react';
import Header from './Header/Header';
import Product from './Product/index.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;
