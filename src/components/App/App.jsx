import React, { Component } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Statistics } from 'components/Statictics/Statistics';
// import { Notification } from 'components/Section/Notification';

export class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    // const { name, number } = this.state;

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContainerWrap>
          <ContactForm
            onSubm={this.formSubmitHandler}
            handleChange={this.handleChange}
          />
        </ContainerWrap>
        <ContainerWrap title="Statistics"></ContainerWrap>
      </div>
    );
  }
}
