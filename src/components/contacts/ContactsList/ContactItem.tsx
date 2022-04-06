import React, { FC } from "react";

import {
  contactDeleted,
  contactChosen,
} from "../../../features/contacts/contacts-slice";
import { useAppDispatch } from "../../../app/hooks/redux";
import { ContactInterface } from "../../../utils/data";

interface ContactItemProps {
  contact: ContactInterface;
}

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const { id, firstName, lastName, phone, email } = contact;

  const handleDelete = () => {
    dispatch(contactDeleted(id));
  };

  const handleEdit = () => {
    console.log(id);
    dispatch(contactChosen(id));
  };

  return (
    <li>
      <p>{`${firstName} ${lastName}`}</p>
      <p>{phone}</p>
      <button type="button" onClick={handleDelete}>
        Удалить
      </button>
      <button type="button" onClick={handleEdit}>
        Редактировать
      </button>
    </li>
  );
};

export default ContactItem;
