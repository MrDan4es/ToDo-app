import { observer } from "mobx-react-lite";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import SignForm from "components/signForm";
import { AuthContext } from "index";
import { Button } from "components/UI";

const IndexPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();
  const { authStore } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/todo", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStore.isAuth]);

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div className="w-[400px] h-[400px] bg-todoDark opacity-75 rounded-xl shadow-2xl shadow-todoDark flex flex-col justify-between p-10">
        <div className="text-center text-white text-2xl">
          {isLoginForm ? "Войти" : "Зарегистрироваться"}
        </div>
        {<SignForm isLogin={isLoginForm} />}
        <Button onClick={() => setIsLoginForm(!isLoginForm)}>
          {isLoginForm
            ? "Нет аккаунта? Зарегистрируйтесь"
            : "Войти в существующий аккаунт"}
        </Button>
      </div>
    </div>
  );
};

export default observer(IndexPage);
