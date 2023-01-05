import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
