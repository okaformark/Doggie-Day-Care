import React from 'react';
import './App.scss';
import myDogs from './dogs';
import staffs from './employee';
import DogPen from '../components/dogPen/dogPen';
import StaffRoom from '../components/StaffRoom/StaffRoom';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs, employees: staffs });
  }

  render() {
    const { dogs, employees } = this.state;
    return (
      <div className="App">
        <DogPen dogs={dogs}/>
        <StaffRoom employees={employees}/>
      </div>
    );
  }
}


export default App;
