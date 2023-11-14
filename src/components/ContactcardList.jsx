import React from 'react';
import Contactcard from './Contactcard';

const ContactcardList = (props) => {
  const { number, type, action, icon } = props.contactitem;

  return (
    <div className="">
      <Contactcard number={number} type={type} action={action} icon={icon} />
    </div>
  );
};

export default ContactcardList;
