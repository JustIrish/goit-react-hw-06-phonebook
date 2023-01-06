import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
