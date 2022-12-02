import React, { Component } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
// import { Notification } from 'components/Section/Notification';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContainerWrap>
          <ContactForm
            onSubm={this.addContact}
            handleChange={this.handleChange}
          />
        </ContainerWrap>
        <ContainerWrap title="Contacts">
          {contacts.length > 0 && (
            <ContactsList
              contacts={contacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </ContainerWrap>
      </div>
    );
  }
}
