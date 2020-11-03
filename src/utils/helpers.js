export default (todos) => {
  // sort by date
  const sortedTodos = todos.sort(function (a, b) {
    // sort by date from soonest, null dates go after eerything else
    return (
      (a.dueDate === null) - (b.dueDate === null) ||
      new Date(a.dueDate) - new Date(b.dueDate)
    );
  });

  const completed = [];
  const overDue = [];
  const needTodo = [];

  // loop through find all dates that are before today and push to the top of the stack
  // else if completed push to the end of the stack
  sortedTodos.forEach((todo) => {
    // if isCompleted then consider it completed
    if (todo.isComplete) {
      return completed.push(todo);
    }

    // if not completed, has a due date and is less than today's date, then consider it overdue.
    if (
      !todo.isCompleted &&
      todo.dueDate &&
      new Date(todo.dueDate) < new Date()
    ) {
      return overDue.push({ ...todo, overDue: true });
    }

    return needTodo.push(todo);
  });

  // build the todos list
  const orderedTodoList = [...overDue, ...needTodo, ...completed];

  return orderedTodoList;
};
