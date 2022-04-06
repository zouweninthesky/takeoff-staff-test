import React from "react";
import { useAppSelector } from "../../../app/hooks/redux";

import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts } = useAppSelector((state) => state.contacts);

  return (
    <ul>
      {contacts.length ? (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <p>Пока контактов нет</p>
      )}
    </ul>
  );
};

export default ContactsList;
