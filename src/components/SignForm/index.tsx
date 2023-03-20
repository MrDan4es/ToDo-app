import React, { useContext, useState } from "react";

import { AuthContext } from "index";
import { Button, Input } from "components/UI";

interface Props {
  isLogin: boolean;
}

const SignForm: React.FC<Props> = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { authStore } = useContext(AuthContext);

  const handleClick = async () => {
    setSubmitting(true);
    if (props.isLogin)
      await authStore.login(email, password, (e: any) => console.log(e));
    else await authStore.register(email, password, (e: any) => console.log(e));
    setSubmitting(false);
  };

  return (
    <div className="my-4 flex flex-col gap-y-2">
      <Input
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="email"
        type="email"
      ></Input>
      <Input
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="Password"
        type="password"
      ></Input>
      <Button
        variant="blue"
        disabled={!email || !password || submitting}
        onClick={handleClick}
      >
        {props.isLogin ? "Войти" : "Зарегистрироваться"}
      </Button>
    </div>
  );
};

export default SignForm;
