import React, { FC, FormEvent } from "react";
import "./Login.scss";

import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import fetchLogin from "../../features/auth/auth-thunks";
import useValidatedInput from "../../app/hooks/input";
import { Navigate } from "react-router";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector((state) => state.auth);
  const login = useValidatedInput("", {
    isEmpty: true,
    isNotEmail: true,
  });
  const password = useValidatedInput("", {
    isEmpty: true,
  });

  const loginErrors = () => {
    if (login.isEmpty) return "Введите логин";
    if (login.isNotEmail) return "Неподходящий формат";
  };

  const passwordErrors = () => {
    if (password.isEmpty) return "Введите пароль";
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchLogin({ login: login.value, password: password.value }));
  };

  if (loggedIn) return <Navigate to="/contacts" />;

  return (
    <section className="login">
      <h1 className="login__header">Войдите</h1>
      <form action="" onSubmit={(e) => handleLogin(e)}>
        <div className="input">
          <label htmlFor="login">Логин</label>
          {login.isDirty && !login.inputValid && <p>{loginErrors()}</p>}
          <input
            id="login"
            type="text"
            value={login.value}
            onBlur={login.onBlur}
            onChange={(e) => login.onChange(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Пароль</label>
          {password.isDirty && !password.inputValid && (
            <p>{passwordErrors()}</p>
          )}
          <input
            id="password"
            type="password"
            value={password.value}
            onBlur={password.onBlur}
            onChange={(e) => password.onChange(e)}
          />
        </div>
        <button
          className="button"
          disabled={!login.inputValid || !password.inputValid}
        >
          Войти
        </button>
      </form>
    </section>
  );
};

export default Login;
