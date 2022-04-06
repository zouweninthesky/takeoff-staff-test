import React, { FC, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/redux";
import useValidatedInput from "../../../app/hooks/input";
import { ContactInterface } from "../../../utils/data";
import {
  contactEdited,
  contactUnchosen,
} from "../../../features/contacts/contacts-slice";
import Modal from "../../common/modals/Modal";
import { modalIdChanged } from "../../../features/global/global-slice";

interface EditContactInterface {
  contact: ContactInterface;
}

const EditContact: FC<EditContactInterface> = ({ contact }) => {
  // useEffect(() => {
  // }, [contact]);

  const firstName = useValidatedInput(contact!.firstName, {
    isEmpty: true,
    minLength: 0,
  });
  const lastName = useValidatedInput(contact!.lastName, { minLength: 0 });
  const phone = useValidatedInput(contact!.phone, {
    isEmpty: true,
    minLength: 0,
  });
  const email = useValidatedInput(contact!.email, {
    minLength: 0,
    isNotEmail: true,
  });
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

  // const clearForm = () => {
  //   firstName.resetInput();
  //   lastName.resetInput();
  //   phone.resetInput();
  //   email.resetInput();
  // };

  const handleSubmit = () => {
    const editedContact = {
      id: contact.id,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
    };
    dispatch(contactEdited(editedContact));
    dispatch(modalIdChanged(""));
    // clearForm();
  };

  const handleClose = () => {
    dispatch(contactUnchosen());
    dispatch(modalIdChanged(""));
  };

  return (
    <Modal>
      Изменить контакт
      <button type="button" onClick={handleClose}>
        Закрыть редактор
      </button>
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
        Изменить контакт
      </button>
    </Modal>
  );
};

export default EditContact;
