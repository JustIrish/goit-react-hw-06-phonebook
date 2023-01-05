import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const addContactHandler = (name, number) => {
    const contact = { id: nanoid(), name, number };

    if (
      contacts.find(
        elem => elem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const removeContactHandler = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList />
      <GlobalStyle />
      <Toaster position="top-center" />
    </Layout>
  );
};
