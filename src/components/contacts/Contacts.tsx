import React, { FC, useEffect } from "react";
import "./Contacts.scss";

import ContactsList from "./ContactsList/ContactsList";
import ContactsForm from "./ContactsForm/ContactsForm";
import Overlay from "../common/modals/Overlay";
import SearchBar from "./SearchBar/SearchBar";
import Icon from "../common/Icon/Icon";

import { useAppSelector, useAppDispatch } from "../../app/hooks/redux";
import { modalIdChanged } from "../../features/global/global-slice";
import fetchContacts from "../../features/contacts/contacts-thunks";
import { signOut } from "../../features/auth/auth-slice";
import { MODAL_EDIT, MODAL_CREATE } from "../../utils/constants";

const Contacts: FC = () => {
  const { contacts, contactChosen } = useAppSelector((state) => state.contacts);
  const { modalId } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (contacts.length === 0) dispatch(fetchContacts());
  }, [contacts]);

  useEffect(() => {
    if (modalId === "") {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      const top = window.scrollY;
      console.log(top);
      document.body.style.position = "fixed";
      document.body.style.top = `-${top}px`;
    }
  }, [modalId]);

  const handleCreate = () => {
    dispatch(modalIdChanged(MODAL_CREATE));
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <section className="container contacts">
      <h1 className="contacts__header">Ваши контакты</h1>
      <button
        className="contacts__button contacts__button--logout"
        type="button"
        onClick={handleLogout}
      >
        <Icon id="logout" width={40} />
      </button>
      <SearchBar />
      {contacts && <ContactsList />}
      {contactChosen && modalId === MODAL_EDIT && (
        <ContactsForm contact={contactChosen} />
      )}
      {modalId === MODAL_CREATE && <ContactsForm />}
      <Overlay />
      <button
        className="contacts__button contacts__button--create"
        type="button"
        onClick={handleCreate}
      >
        <Icon id="plus" width={30} />
      </button>
    </section>
  );
};

export default Contacts;
