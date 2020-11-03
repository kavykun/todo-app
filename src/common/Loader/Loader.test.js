import { render } from '@testing-library/react';

import Loader from './index';

test('Should match snapshot', async () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});
