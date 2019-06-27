import React from 'react';
import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Home from '../components/Home/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Home />
      </div>
    );
  }
}


export default App;
