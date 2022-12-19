import React, { useContext, useState } from "react";

import { AuthContext } from "index";
import { Button, Input } from "components/UI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { authStore } = useContext(AuthContext);

  const handleRegisterClick = async () => {
    setSubmitting(true);
    await authStore.login(email, password, (e: any) => console.log(e));
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
        className="!bg-todoOrange"
        disabled={!email || !password || submitting}
        onClick={handleRegisterClick}
      >
        Войти
      </Button>
    </div>
  );
};

export default Login;
