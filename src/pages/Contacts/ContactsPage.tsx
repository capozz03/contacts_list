import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/slice/users/slice';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logoutUser());
  }

  return (
    <div>
      work!
      <Button type="primary" onClick={onClick}>EXIT</Button>
    </div>
  );
};

export default ContactsPage;