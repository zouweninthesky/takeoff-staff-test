import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks/redux";

import ContactsList from "./ContactsList/ContactsList";
import CreateContact from "./CreateContact/CreateContact";

import { contactsLoaded } from "../../features/contacts/contacts-slice";
import data from "../../utils/data";

const Contacts: FC = () => {
  const { contacts } = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("here i am");
    if (contacts.length === 0) dispatch(contactsLoaded(data));
  }, [contacts]);

  return (
    <div>
      We are the contacts
      {contacts && <ContactsList />}
      <CreateContact />
    </div>
  );
};

export default Contacts;
