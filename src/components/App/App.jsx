import React, { Component } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
// import { Notification } from 'components/Section/Notification';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Fiter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
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
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 && (
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </ContainerWrap>
      </div>
    );
  }
}
