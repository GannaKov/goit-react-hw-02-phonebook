import React from 'react';
import { FiltrLabel,FiltrInput } from './Filter.styled';
export const Filter = ({ value, onChange }) => (
  <FiltrLabel>
    Find contacts by name
    <FiltrInput type="text" value={value} onChange={onChange} />
  </FiltrLabel>
);
