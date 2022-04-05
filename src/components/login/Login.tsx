import React, { FC } from "react";
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
    <div>
      <div>
        <label htmlFor="login">Логин</label>
        {login.isDirty && !login.inputValid && <div>{loginErrors()}</div>}
        <input
          id="login"
          type="text"
          value={login.value}
          onBlur={login.onBlur}
          onChange={(e) => login.onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        {password.isDirty && !password.inputValid && (
          <div>{passwordErrors()}</div>
        )}
        <input
          id="password"
          type="text"
          value={password.value}
          onBlur={password.onBlur}
          onChange={(e) => password.onChange(e)}
        />
      </div>
      <button disabled={!login.inputValid || !password.inputValid}>
        Нажми-ка
      </button>
    </div>
  );
};

export default Login;
