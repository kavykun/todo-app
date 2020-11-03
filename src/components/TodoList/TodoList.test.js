import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GET_TODO } from '../../api/todoApi';
import TodoList from './index';
import TodoListMock from './mocks/TodoList.mock';

const server = setupServer(
  rest.get(GET_TODO, (req, res, ctx) => {
    return res(ctx.json(TodoListMock));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Loads and displays Todos', async () => {
  render(<TodoList />);

  await waitFor(() => screen.getAllByRole('checkbox'));
  expect(screen.getAllByText('MOCK TODO 1'));
});

test('Handles server error for GET todos', async () => {
  server.use(
    rest.get(GET_TODO, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  render(<TodoList />);
  await waitFor(() => screen.queryAllByText('Error'));
  expect(screen.queryAllByText('Error'));
});
