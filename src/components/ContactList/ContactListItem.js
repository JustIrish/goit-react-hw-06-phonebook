import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/action';
import PropTypes from 'prop-types';
import {
  ContactItem,
  BtnDelete,
  TextWrap,
  ContactText,
  ContactMarker,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <TextWrap>
        <ContactMarker></ContactMarker>
        <ContactText>
          {name}: {number}
        </ContactText>
      </TextWrap>
      <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnDelete>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};