import React from 'react';
import PropTypes from 'prop-types';
import Dog from '../Dog/Dog';

import './dogPen.scss';
import dogShape from '../../helpers/propz/dogShape';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const buildDog = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
        { buildDog }
      </div>
    );
  }
}

export default DogPen;
