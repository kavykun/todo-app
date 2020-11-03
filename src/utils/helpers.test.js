import orderTodoList from './helpers';
import todos from './mocks/TodoList.mock';
import orderedTodos from './mocks/OrderedTodoList.mock';

test('Should output an ordered list of todos', async () => {
  expect(orderTodoList(todos)).toEqual(orderedTodos);
});
