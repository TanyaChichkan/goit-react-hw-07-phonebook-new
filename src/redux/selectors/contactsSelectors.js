import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.filterValue;

const getContacts = (state) => state.contactsArr.contacts;
const getSelectedContact = (state) => state.contactsArr.selectedContact;
const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
});

const getError = (state) => state.contactsArr.error;
const getContactsLoading = (state) => state.contactsArr.isLoading;

export {
  getContacts,
  getSelectedContact,
  getFilter,
  getVisibleContacts,
  getError,
  getContactsLoading,
};
