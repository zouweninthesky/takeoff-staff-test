import React from "react";
import { useAppSelector } from "../../../app/hooks/redux";

const ContactsList = () => {
  const { contacts } = useAppSelector((state) => state.contacts);

  return (
    <ul>
      {contacts.length ? (
        contacts.map(({ id, firstName, lastName, phone }) => {
          return (
            <li key={id}>
              <p>{`${firstName} ${lastName}`}</p>
              <p>{phone}</p>
            </li>
          );
        })
      ) : (
        <p>Пока контактов нет</p>
      )}
    </ul>
  );
};

export default ContactsList;
