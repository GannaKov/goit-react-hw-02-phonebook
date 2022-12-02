import React from 'react';
// import PropTypes from 'prop-types';
export function ContactItem({ contact: { name, number } }) {
  return (
    <>
      <span>
        {name}: {number}
      </span>
    </>
  );
}
