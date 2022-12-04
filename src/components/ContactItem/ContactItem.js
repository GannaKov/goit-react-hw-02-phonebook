import React from 'react';
import { ContactItemSpan } from './ContactItem.styled';
// import PropTypes from 'prop-types';
export function ContactItem({ contact: { name, number } }) {
  return (
    <>
      <ContactItemSpan>
        {name}: {number}
      </ContactItemSpan>
    </>
  );
}
