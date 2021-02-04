import React,{useEffect} from 'react';
import {connect,useDispatch,useSelector} from 'react-redux';

import Form from '../form/Form';
import Section from '../section/Section';
import List from '../list/List';
import Filter from '../filter/Filter';
// import {getContacts} from '../../redux/actions/contactsActions';
import {getContactsOperations} from '../../redux/operations/contactsOperations';


const ContactsTracker = () => {

const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getContactsOperations());
  },[]);

  return(
    <>
    <Section>
      <h1>Phonebook</h1>
      <Form/>
      <Filter/>
      <List/>
    </Section>
    </>
  )
};



export default ContactsTracker;


