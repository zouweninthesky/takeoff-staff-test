import React, { FC } from "react";
import useValidatedInput from "../../../app/hooks/input";

const CreateContact: FC = () => {
  const firstName = useValidatedInput("", { isEmpty: true, minLength: 0 });
  const lastName = useValidatedInput("", { minLength: 0 });
  const phone = useValidatedInput("", { isEmpty: true, minLength: 0 });
  const email = useValidatedInput("", { minLength: 0, isNotEmail: true });

  const firstNameErrors = () => {
    return "Введите имя";
  };

  const phoneErrors = () => {
    if (phone.isEmpty) return "Введите номер";
    if (phone.isNotPhone) return "Неверный формат";
  };

  const emailErrors = () => {
    return "Неверный формат";
  };

  const clearForm = () => {
    firstName.resetInput();
    lastName.resetInput();
    phone.resetInput();
    email.resetInput();
  };

  const handleSubmit = () => {
    clearForm();
  };

  return (
    <div>
      Новый контакт
      <div>
        <label htmlFor="firstName">Имя</label>
        {firstName.isDirty && !firstName.inputValid && (
          <div>{firstNameErrors()}</div>
        )}
        <input
          id="firstName"
          type="text"
          value={firstName.value}
          onBlur={firstName.onBlur}
          onChange={(e) => firstName.onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Фамилия</label>
        <input
          id="lastName"
          type="text"
          value={lastName.value}
          onBlur={lastName.onBlur}
          onChange={(e) => lastName.onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="phone">Телефон</label>
        {phone.isDirty && !phone.inputValid && <div>{phoneErrors()}</div>}
        <input
          id="phone"
          type="text"
          value={phone.value}
          onBlur={phone.onBlur}
          onChange={(e) => phone.onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Почта</label>
        {email.isDirty && !email.inputValid && <div>{emailErrors()}</div>}
        <input
          id="email"
          type="text"
          value={email.value}
          onBlur={email.onBlur}
          onChange={(e) => email.onChange(e)}
        />
      </div>
      <button
        type="button"
        disabled={!firstName.inputValid || !phone.inputValid}
        onClick={() => {
          console.log("heheheh");
          handleSubmit();
        }}
      >
        Создать контакт
      </button>
    </div>
  );
};

export default CreateContact;
