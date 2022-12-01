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
  addContact = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const a = this.state.contacts[0];
    console.log(a);
    // // const { id, name, number } = contacts;
    // console.log(a.name);

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
          <ContactsList />
        </ContainerWrap>
      </div>
    );
  }
}
