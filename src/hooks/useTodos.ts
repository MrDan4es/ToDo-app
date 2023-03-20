import { useEffect, useState } from "react";

import { ITodo } from "types/todo.types";
import TodoService from "services/todo.service";

export const useTodos = (userId: number) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    if (!todos.length) setLoading(true);
    const data = await TodoService.getTodos(userId);
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { todos, loading, fetchTodos };
};
