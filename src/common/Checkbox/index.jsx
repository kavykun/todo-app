import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.css';

const Checkbox = (props) => {
  const { name, checked, handleInputChange } = props;

  return (
    <input
      name={name}
      type="checkbox"
      checked={checked}
      onChange={handleInputChange}
      className="checkbox"
      id="check"
    />
  );
};

Checkbox.defaultProps = {
  name: '',
  checked: false,
  handleInputChange: () => {},
};

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  handleInputChange: PropTypes.func,
};

export default Checkbox;
