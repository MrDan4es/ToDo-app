import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ToDo from "components/todo";
import TodoService from "services/todo.service";
import { AuthContext } from "index";
import { Button, Modal } from "components/UI";
import { useTodos } from "hooks/useTodos";

const ToDoPage: React.FC = () => {
  const navigate = useNavigate();
  const { authStore } = useContext(AuthContext);
  const { loading, todos, fetchTodos } = useTodos(authStore.userID);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleLogout = () => authStore.logout();

  const postTodo = () => {
    TodoService.postTodo(authStore.userID, "test").then(() => fetchTodos());
  };

  const deleteTodo = useCallback((id: number) => {
    TodoService.deleteTodo(id).then(() => fetchTodos());
  }, []);

  const changeCompleted = (id: number, completed: boolean) => {
    TodoService.changeCompletedTodo(id, completed);
  };

  useEffect(() => {
    if (!authStore.isAuth) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStore.isAuth]);

  return (
    <div className="w-full lg:w-[500px] bg-todoDark h-screen flex flex-col">
      <Modal open={isModalOpen} closeModal={() => setModalOpen(false)}>
        👋 Hey, I'm a modal. Click anywhere outside of me to close.
      </Modal>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Button onClick={postTodo}>Test</Button>
      <a href="/">
        <Button onClick={handleLogout}>Log Out</Button>
      </a>
      {loading
        ? "loading..."
        : todos
            .sort((a, b) => b.id - a.id)
            .map(todo => (
              <ToDo
                deleteTodo={deleteTodo}
                changeCompleted={changeCompleted}
                todo={todo}
                key={`todo_${todo.id}`}
              />
            ))}
    </div>
  );
};

export default ToDoPage;
