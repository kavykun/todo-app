import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../common/Checkbox';
import Date from '../../common/Date';

import './TodoItem.css';

const TodoItem = (props) => {
  const {
    completed,
    overDue,
    todo: { id, description, dueDate },
    handleInputChange,
  } = props;

  return (
    <div
      className={`todo-item ${completed ? 'completed' : ''} ${
        overDue ? 'overDue' : ''
      }`}
      key={id}
    >
      <Checkbox
        name="todo-item-checkbox"
        handleInputChange={() => handleInputChange(id)}
        checked={completed}
      />
      <div className="todo-item-description">{description}</div>
      <Date date={dueDate} />
    </div>
  );
};

TodoItem.defaultProps = {
  completed: false,
  overDue: false,
  handleInputChange: () => {},
  todo: {
    id: '',
    description: '',
    dueDate: ' ',
  },
};

TodoItem.propTypes = {
  completed: PropTypes.bool,
  overDue: PropTypes.bool,
  handleInputChange: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
  }),
};

export default TodoItem;
