import { render, fireEvent, screen } from '@testing-library/react';

import TodoItem from './TodoItem';

test('Should render a single todo item', async () => {
  const mockProps = {
    completed: true,
    overDue: false,
    handleInputChange: jest.fn(),
    todo: {
      id: '',
      description: '',
      dueDate: '05/05/2005',
    },
  };
  render(<TodoItem {...mockProps} />);
  expect(screen.getByRole('checkbox'));
});

test('Should handle click event if checkbox is pressed in todo item', async () => {
  const mockProps = {
    completed: false,
    overDue: true,
    handleInputChange: jest.fn(),
    todo: {
      id: '',
      description: '',
      dueDate: '05/05/2005',
    },
  };
  render(<TodoItem {...mockProps} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(mockProps.handleInputChange).toHaveBeenCalledTimes(1);
});
