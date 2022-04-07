import React from "react";
import "./ContactsList.scss";

import ContactItem from "./ContactsItem/ContactItem";
import { useAppSelector } from "../../../app/hooks/redux";
import { ContactInterface } from "../../../utils/data";
import { LETTERS_REGEXP, DIGITS_REGEXP } from "../../../utils/reg-exp";

const ContactsList = () => {
  const { contacts, search } = useAppSelector((state) => state.contacts);

  console.log(LETTERS_REGEXP.test(String(search).toLowerCase()));

  const filterContacts = (contacts: ContactInterface[], search: string) => {
    let filteredContacts: ContactInterface[] = [];
    if (!LETTERS_REGEXP.test(String(search).toLowerCase())) {
      filteredContacts = [...contacts].filter((contact) =>
        contact.firstName.includes(search)
      );
      filteredContacts = [
        ...filteredContacts,
        ...[...contacts].filter((contact) => contact.lastName.includes(search)),
      ];
      filteredContacts = [
        ...filteredContacts,
        ...[...contacts].filter((contact) => contact.email.includes(search)),
      ];
    }

    if (DIGITS_REGEXP.test(String(search).toLowerCase())) {
      filteredContacts = [...contacts].filter((contact) =>
        contact.phone.toString().includes(search)
      );
    }

    return filteredContacts;
  };

  const filteredContacts = search ? filterContacts(contacts, search) : contacts;

  return (
    <div className="contacts-list">
      <ul className="contacts-list__list">
        {filteredContacts.length ? (
          filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <p>{search ? "Поиск не дал результатов" : "Пока контактов нет"}</p>
        )}
      </ul>
    </div>
  );
};

export default ContactsList;
