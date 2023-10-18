import { List } from './ContactList.styled';

export const ContactList = ({ onfindContact, onDeleteContact }) => {
  const filterContact = onfindContact();

  return (
    <List>
      {[
        filterContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        }),
      ]}
    </List>
  );
};
