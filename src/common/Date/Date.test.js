import { render } from '@testing-library/react';

import Date from './index';

test('Should return an empty div if date is empty string', async () => {
  const date = '';
  const { asFragment } = render(<Date date={date} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Should return an empty div if date is null', async () => {
  const date = null;
  const { asFragment } = render(<Date date={date} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Should match snapshot', async () => {
  const date = '07/05/2012';
  const { asFragment } = render(<Date date={date} />);
  expect(asFragment()).toMatchSnapshot();
});
