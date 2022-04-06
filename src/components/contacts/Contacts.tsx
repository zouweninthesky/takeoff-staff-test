import React, { FC, useEffect } from "react";
import "./Contacts.scss";

import { useAppSelector, useAppDispatch } from "../../app/hooks/redux";

import ContactsList from "./ContactsList/ContactsList";
import CreateContact from "./CreateContact/CreateContact";
import Overlay from "../common/modals/Overlay";
import Icon from "../common/Icon/Icon";

import { contactsLoaded } from "../../features/contacts/contacts-slice";
import data from "../../utils/data";
import EditContact from "./EditContact/EditContact";
import { MODAL_EDIT, MODAL_CREATE } from "../../utils/constants";
import { modalIdChanged } from "../../features/global/global-slice";
import SearchBar from "./SearchBar/SearchBar";

const Contacts: FC = () => {
  const { contacts, contactChosen } = useAppSelector((state) => state.contacts);
  const { modalId } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (contacts.length === 0) dispatch(contactsLoaded(data));
  }, [contacts]);

  const handleCreate = () => {
    dispatch(modalIdChanged(MODAL_CREATE));
  };

  return (
    <section className="container contacts">
      <h1 className="contacts__header">Ваши контакты</h1>
      <SearchBar />
      {contacts && <ContactsList />}
      {contactChosen && modalId === MODAL_EDIT && (
        <EditContact contact={contactChosen} />
      )}
      {modalId === MODAL_CREATE && <CreateContact />}
      <Overlay />
      <button
        className="contacts__create-button"
        type="button"
        onClick={handleCreate}
      >
        <Icon id="plus" width={30} />
      </button>
    </section>
  );
};

export default Contacts;
