import React, { FC } from "react";

import { contactDeleted } from "../../../features/contacts/contacts-slice";
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

  return (
    <li>
      <p>{`${firstName} ${lastName}`}</p>
      <p>{phone}</p>
      <button type="button" onClick={handleDelete}>
        Удалить
      </button>
    </li>
  );
};

export default ContactItem;
