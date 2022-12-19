import { useEffect, useState } from "react";

import { API_URL } from "../http";
import { ITodo } from "types/todo.types";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/todos`)
      .then(res => res.json())
      .then(data => setTodos(data))
      .finally(() => setLoading(false));
  }, []);

  return { todos, loading };
};
