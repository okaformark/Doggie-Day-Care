import React from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';
import './App.scss';
import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Home from '../components/Home/Home';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  // componentDidMount() {

  // }

  render() {
    // const { authed } = this.state;
    // const loadComponent = () => {
    //   if ()
    // }
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
        <Home />
      </div>
    );
  }
}


export default App;
