import React from 'react';
import './Dog.scss';

class Dog extends React.Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3">
        <div className="card-group">
          <div className="box img-fluid">
            <img src={dog.imageUrl} className="card-img-top" alt=""/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{dog.breed}</h5>
            <p className="card-text">{dog.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
