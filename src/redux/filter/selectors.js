import { createSelector } from "@reduxjs/toolkit";
import selectContacts from '../contacts/selectors'

export const selectFilter = (state) => state.filters.inputValue;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);