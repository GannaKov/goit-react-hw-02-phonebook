import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Fiter/Filter';
import { Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const checkName = contacts
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === name.toLowerCase());
    if (!checkName) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    } else {
      window.alert(`${name} is already in contacts `);
    }
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
      <div  style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}>
        <GlobalStyle />
        <Title>Phonebook</Title>
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
