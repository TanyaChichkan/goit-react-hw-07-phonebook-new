import axios from 'axios';
import {addContact, setError,setLoading,deleteContact, getContacts, changeContact, resetSelected} from '../actions/contactsActions';

export const addContactOperations = contact=>dispatch=>{
  dispatch(setLoading());

  axios
    .post(`https://phonebook-83997-default-rtdb.firebaseio.com/contacts.json`,{...contact,update:false})
    .then(response=>dispatch(addContact({...contact,id:response.data.name})))
    .catch(error=>dispatch(setError(error)))
    .finally(()=>dispatch(setLoading()))
};

export const deleteContactOperations=(id,contact)=>dispatch=>{
  dispatch(setLoading());

  axios
    .delete(`https://phonebook-83997-default-rtdb.firebaseio.com/contacts/${id}.json`,contact)
    .then(()=>dispatch(deleteContact(id)))
    .catch(error=>dispatch(setError(error)))
    .finally(()=>dispatch(setLoading()))
}

export const getContactsOperations=()=>dispatch=>{
  dispatch(setLoading());

  axios
    .get(`https://phonebook-83997-default-rtdb.firebaseio.com/contacts.json`)
    .then(response=>{
      const contacts = Object.keys(response.data).map(key=>({...response.data[key],id:key}));
      dispatch(getContacts(contacts))
    })
    .catch(error=>dispatch(setError))
    .finally(()=>dispatch(setLoading()))
}

export const changeContactsOperations=(newContact)=>dispatch=>{
  dispatch(setLoading());

  axios
    .put(`https://phonebook-83997-default-rtdb.firebaseio.com/contacts/${newContact.id}.json`,{...newContact,update:false})
    .then(()=>{
      dispatch(changeContact(newContact));
      dispatch(resetSelected());

    })
    .catch(error=>setError(error))
    .finally(()=>setLoading());
}