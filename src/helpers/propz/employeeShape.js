import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  Age: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
});

export default { employeeShape };
