import { render, fireEvent, screen } from '@testing-library/react';

import Checkbox from './index';

test('Should call handleChange() onClick', async () => {
  const testName = 'test-checkbox';
  const handleClick = jest.fn();
  render(<Checkbox name={testName} handleInputChange={handleClick} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Should match snapshot', async () => {
  const testName = 'test-checkbox';
  const handleClick = jest.fn();
  const { asFragment } = render(
    <Checkbox name={testName} handleInputChange={handleClick} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
