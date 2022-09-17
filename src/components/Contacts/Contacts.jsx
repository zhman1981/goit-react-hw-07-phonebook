import React from 'react';
import { SubmitButton } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
            <SubmitButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </SubmitButton>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
