import React from 'react';
import myDogs from '../../App/dogs';
import staffs from '../../App/employee';
import DogPen from '../dogPen/dogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';

class Home extends React.Component {
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
        <div className="headings">Doggies- A man's bestfriend</div>
        <DogPen dogs={dogs}/>
        <div className="headings">Meet Our Employees</div>
        <StaffRoom employees={employees}/>
      </div>
    );
  }
}

export default Home;
