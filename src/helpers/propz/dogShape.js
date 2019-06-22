import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  favTreat: PropTypes.string.isRequired,
  favToy: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default { dogShape };
