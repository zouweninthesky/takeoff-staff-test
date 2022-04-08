import React, { FC } from "react";

import Modal from "../../common/modals/Modal";
import { useAppDispatch } from "../../../app/hooks/redux";
import {
  contactCreated,
  contactEdited,
  contactUnchosen,
} from "../../../features/contacts/contacts-slice";
import { modalIdChanged } from "../../../features/global/global-slice";
import useValidatedInput from "../../../app/hooks/input";
import { ContactInterface } from "../../../utils/data";

interface ContactsFormProps {
  contact?: ContactInterface;
}

const ContactsForm: FC<ContactsFormProps> = ({ contact }) => {
  const firstName = useValidatedInput(contact ? contact.firstName : "", {
    isEmpty: true,
  });
  const lastName = useValidatedInput(contact ? contact.lastName : "", {});
  const phone = useValidatedInput(contact ? contact.phone : "", {
    isEmpty: true,
    isNotPhone: true,
  });
  const email = useValidatedInput(contact ? contact.email : "", {
    isNotEmail: true,
    mayBeEmpty: true,
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

  const handleSubmit = () => {
    const newContact = {
      id: contact ? contact.id : Date.now(),
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
    };
    if (contact) {
      dispatch(contactEdited(newContact));
      dispatch(contactUnchosen());
    } else {
      dispatch(contactCreated(newContact));
    }
    dispatch(modalIdChanged(""));
  };

  return (
    <Modal>
      <h2 className="modal__header">
        {contact ? "Изменить" : "Новый"} контакт
      </h2>
      <div className="input">
        <label htmlFor="firstName">Имя *</label>
        {firstName.isDirty && !firstName.inputValid && (
          <p>{firstNameErrors()}</p>
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
        <label htmlFor="phone">Телефон *</label>
        {phone.isDirty && !phone.inputValid && <p>{phoneErrors()}</p>}
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
        {email.isDirty && email.value && !email.inputValid && (
          <p>{emailErrors()}</p>
        )}
        <input
          id="email"
          type="text"
          value={email.value}
          onBlur={email.onBlur}
          onChange={(e) => email.onChange(e)}
        />
      </div>
      <button
        className="button modal__button"
        type="button"
        disabled={
          !firstName.inputValid ||
          !phone.inputValid ||
          (email.value !== "" && !email.inputValid)
        }
        onClick={handleSubmit}
      >
        {contact ? "Изменить" : "Создать"} контакт
      </button>
    </Modal>
  );
};

export default ContactsForm;
