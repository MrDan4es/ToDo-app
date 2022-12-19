import React from "react";

interface Props {
  title: string;
  timestamp: string;
  completed: boolean;
}

const ToDo: React.FC<Props> = props => {
  return <div>{props.title}</div>;
};

export default ToDo;
