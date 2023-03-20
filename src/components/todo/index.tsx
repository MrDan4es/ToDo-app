import React, { useState } from "react";

import { Button } from "components/UI";
import { ITodo } from "types/todo.types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  todo: ITodo;
  deleteTodo: (id: number) => void;
  changeCompleted: (id: number, completed: boolean) => void;
}

const ToDo: React.FC<Props> = ({
  todo,
  deleteTodo,
  changeCompleted,
  ...props
}) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleChecked = (checked: boolean) => {
    setCompleted(checked);
    changeCompleted(todo.id, checked);
  };

  return (
    <div className="text-white" {...props}>
      {todo.title}
      <Button variant="red" onClick={() => deleteTodo(todo.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="scale-50"
          height="48"
          width="48"
        >
          <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
        </svg>
      </Button>
      <input
        type="checkbox"
        checked={completed}
        onChange={({ target: { checked } }) => handleChecked(checked)}
      ></input>
      {todo.timestamp}
    </div>
  );
};

export default React.memo(ToDo);
