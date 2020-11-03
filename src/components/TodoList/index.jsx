import React, { useEffect, useState } from 'react';
import { GET_TODO } from '../../api/todoApi';
import TodoItem from './TodoItem';
import Loader from '../../common/Loader';
import orderTodoList from '../../utils/helpers';

import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [refetch, setRefetch] = useState(false);
  const [networkActivity, setNetworkActivity] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const url = `GET ${GET_TODO}`;
      setLoading(true);
      setNetworkActivity(url);

      try {
        const response = await fetch(GET_TODO, {
          method: 'GET',
          headers: {
            'X-Api-Key': process.env.REACT_APP_TODO_API_KEY,
          },
        });

        const data = await response.json();

        if (!response || (response && response.status === 404)) {
          setNetworkActivity(`${url}: ERROR`);
          setError(true);
        }

        if (data.length > 0) {
          setNetworkActivity(`${url}: SUCCESS`);
          setTodos(data);
        }
      } catch {
        setNetworkActivity(`${url}: ERROR`);
        setError(true);
      }

      setLoading(false);
    };

    fetchTodos();
  }, []);

  const handleInputChange = async (todoItemId) => {
    const url = `PATCH https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/patch/${todoItemId}`;
    setNetworkActivity(`${url}`);

    try {
      setNetworkActivity(`${url}`);
      await fetch(`${url}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.REACT_APP_TODO_API_KEY,
        },
        method: 'PATCH',
        body: JSON.stringify({ isComplete: true }),
      });

      // refetch todos after completing a todo item
      // await setRefetch(!refetch);
    } catch {
      setNetworkActivity(`${url}: ERROR`);
    }
  };

  const renderTodos = () => {
    if (todos.length > 0) {
      const orderedTodoList = orderTodoList(todos);

      return orderedTodoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            completed={todo.isComplete}
            overDue={todo.overDue}
            handleInputChange={handleInputChange}
          />
        );
      });
    }
    return null;
  };

  if (error) {
    return <div> Error retrieving todos! </div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="todo-list">{renderTodos()}</div>
      <div className="network-activity">{networkActivity}</div>
    </>
  );
};

export default TodoList;
