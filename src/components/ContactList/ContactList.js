import React from 'react';

// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
export function ContactsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ContactItem contact={item} />
        </li>
      ))}
    </ul>
  );
}
