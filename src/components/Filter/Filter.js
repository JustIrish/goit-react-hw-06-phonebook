import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  // );
  return (
    <>
      <label>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={changeFilter}
        ></InputFilter>
      </label>
    </>
  );
};
