import React, { Component } from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Application } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = formState => {
    const contactId = nanoid(5);
    formState.id = contactId;
    if (this.state.contacts.find(({ name }) => formState.name === name)) {
      alert(`${formState.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, formState] };
    });
  };

  changeInput = input => {
    this.setState({
      [input.name]: input.value,
    });
  };

  deleteContact = contactId => {
    // contactId - id який отримуємо при натисканні на кнопку
    // змінюємо стан від попереднього
    this.setState(prevState => ({
      //  і забираємо всі контакти окрім contactId
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = () => {
    const filterContact = this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
    console.log(filterContact);
    return filterContact;
  };

  render() {
    return (
      <Application>
        <TitlePhonebook title="Phonebook" />
        <ContactForm onSubmitForm={this.formSubmitHandler} />
        <TitleContacts title="Contacts" />
        <Filter
          onChangeInput={this.changeInput}
          inputFilter={this.state.filter}
        />
        <ContactList
          onDeleteContact={this.deleteContact}
          onfindContact={this.findContact}
        />
      </Application>
    );
  }
}
