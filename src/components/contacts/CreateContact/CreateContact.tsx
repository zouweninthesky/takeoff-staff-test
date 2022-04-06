import React, { FC } from "react";

import useValidatedInput from "../../../app/hooks/input";
import { useAppDispatch } from "../../../app/hooks/redux";
import { contactCreated } from "../../../features/contacts/contacts-slice";
import { modalIdChanged } from "../../../features/global/global-slice";
import Modal from "../../common/modals/Modal";

const CreateContact: FC = () => {
  const firstName = useValidatedInput("", { isEmpty: true, minLength: 0 });
  const lastName = useValidatedInput("", { minLength: 0 });
  const phone = useValidatedInput("", { isEmpty: true, minLength: 0 });
  const email = useValidatedInput("", { minLength: 0, isNotEmail: true });
  const dispatch = useAppDispatch();

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
    const newContact = {
      id: Date.now(),
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
    };
    dispatch(contactCreated(newContact));
    clearForm();
    dispatch(modalIdChanged(""));
  };

  const handleClose = () => {
    clearForm();
    dispatch(modalIdChanged(""));
  };

  return (
    <Modal>
      Новый контакт
      <button type="button" onClick={handleClose}></button>
      <div className="input">
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
      <div className="input">
        <label htmlFor="lastName">Фамилия</label>
        <input
          id="lastName"
          type="text"
          value={lastName.value}
          onBlur={lastName.onBlur}
          onChange={(e) => lastName.onChange(e)}
        />
      </div>
      <div className="input">
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
      <div className="input">
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
        className="button"
        type="button"
        disabled={!firstName.inputValid || !phone.inputValid}
        onClick={handleSubmit}
      >
        Создать контакт
      </button>
    </Modal>
  );
};

export default CreateContact;
