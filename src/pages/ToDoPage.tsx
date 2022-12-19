import React, { useContext } from "react";

import ToDo from "components/todo";
import { useTodos } from "hooks/useTodos";
import { Button } from "components/UI";
import { AuthContext } from "index";

const ToDoPage: React.FC = () => {
  const { loading, todos } = useTodos();
  const { authStore } = useContext(AuthContext);

  const handleLogout = () => authStore.logout();

  return (
    <div className="w-full lg:w-[500px] bg-todoDark h-screen">
      <a href="/">
        <Button onClick={handleLogout}>Log Out</Button>
      </a>
      {loading
        ? "типа спиннер крутится"
        : todos.map(task => (
            <ToDo
              title={task.title}
              timestamp={task.timestamp}
              completed={task.completed}
              key={`task_${task.id}`}
            />
          ))}
    </div>
  );
};

export default ToDoPage;
