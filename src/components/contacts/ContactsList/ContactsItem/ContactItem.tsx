import React, { FC } from "react";
import "./ContactItem.scss";

import Icon from "../../../common/Icon/Icon";
import { useAppDispatch } from "../../../../app/hooks/redux";
import {
  contactDeleted,
  contactChosen,
} from "../../../../features/contacts/contacts-slice";
import { modalIdChanged } from "../../../../features/global/global-slice";
import { ContactInterface } from "../../../../utils/data";
import { MODAL_EDIT } from "../../../../utils/constants";

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
    dispatch(contactChosen(id));
    dispatch(modalIdChanged(MODAL_EDIT));
  };

  return (
    <li className="contact">
      <div className="contact__text-wrapper">
        <p className="contact__name">{`${firstName}${
          lastName ? ` ${lastName}` : ""
        }`}</p>
        <p className="contact__phone">{phone}</p>
        {email && <p className="contact__email">{email}</p>}
      </div>
      <div className="contact__buttons-wrapper">
        <button className="contact__button" type="button" onClick={handleEdit}>
          <Icon id="edit" width={40} />
        </button>
        <button
          className="contact__button"
          type="button"
          onClick={handleDelete}
        >
          <Icon id="trash" width={40} />
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
