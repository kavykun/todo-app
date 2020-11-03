import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Date.css';

const Date = (props) => {
  const { date } = props;

  if (!date || date === '') {
    return null;
  }

  const dateFormat = new window.Date(date);

  const formattedDate = moment(dateFormat).utc().format('MM/DD/YYYY');

  return <div className="date">{formattedDate}</div>;
};

Date.defaultProps = {
  date: null,
};

Date.propTypes = {
  date: PropTypes.string,
};

export default Date;
