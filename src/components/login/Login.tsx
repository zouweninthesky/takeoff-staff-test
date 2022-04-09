import React, { FC, FormEvent } from "react";
import { Navigate } from "react-router";
import "./Login.scss";

import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import fetchLogin from "../../features/auth/auth-thunks";
import { loggedIn, errorOccured } from "../../features/auth/auth-slice";
import useValidatedInput from "../../app/hooks/input";
import { WRONG_CREDENTIALS, SERVER_ERROR } from "../../utils/error-codes";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, error } = useAppSelector((state) => state.auth);
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

  const overallErors = () => {
    if (error === WRONG_CREDENTIALS) return "Неверные данные, попробуйте снова";
    if (error === SERVER_ERROR) return "Сервер не отвечает";
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchLogin({ login: login.value, password: password.value }))
      .unwrap()
      .then((originalPromiseResult) => {
        if (originalPromiseResult.length) dispatch(loggedIn());
        else dispatch(errorOccured(WRONG_CREDENTIALS));
      })
      .catch((res) => {
        dispatch(errorOccured(SERVER_ERROR));
      });
  };

  if (isLoggedIn) return <Navigate to="/contacts" />;

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
        {error !== "" && <p>{overallErors()}</p>}
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
