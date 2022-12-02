import React from 'react';

// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
export function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
