import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks/redux";

import ContactsList from "./ContactsList/ContactsList";
import CreateContact from "./CreateContact/CreateContact";

import { contactsLoaded } from "../../features/contacts/contacts-slice";
import data from "../../utils/data";
import EditContact from "./EditContact/EditContact";

const Contacts: FC = () => {
  const { contacts, contactChosen } = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (contacts.length === 0) dispatch(contactsLoaded(data));
  }, [contacts]);

  return (
    <div>
      We are the contacts
      {contacts && <ContactsList />}
      <br />
      {contactChosen && <EditContact contact={contactChosen} />}
      <br />
      <br />
      <br />
      <CreateContact />
    </div>
  );
};

export default Contacts;
