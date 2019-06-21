import React from 'react';
import './App.scss';
import myDogs from './dogs';
import DogPen from '../components/dogPen/dogPen';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <div>Doggie Daycare</div>
        <DogPen dogs={dogs}/>
      </div>
    );
  }
}

export default App;
