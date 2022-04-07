import React, { FC } from "react";
import "./Login.scss";

import useValidatedInput from "../../app/hooks/input";

const Login: FC = () => {
  const login = useValidatedInput("", {
    isEmpty: true,
    minLength: 3,
    isNotEmail: true,
  });
  const password = useValidatedInput("", {
    isEmpty: true,
    minLength: 5,
  });

  const loginErrors = () => {
    if (login.isEmpty) return "Введите логин";
    if (login.minLengthError) return "Логин слишком короткий";
    if (login.isNotEmail) return "Неподходящий формат";
  };

  const passwordErrors = () => {
    if (password.isEmpty) return "Введите пароль";
    if (password.minLengthError) return "Пароль слишком короткий";
  };

  return (
    <section className="login">
      <h1 className="login__header">Войдите</h1>
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
        {password.isDirty && !password.inputValid && <p>{passwordErrors()}</p>}
        <input
          id="password"
          type="text"
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
    </section>
  );
};

export default Login;
